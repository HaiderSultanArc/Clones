import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios';    // axios is the default export (instance) from the file axios.js
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";    // base_url for the images of the request that came back

function Row({title, fetchUrl, isLargeRow}) {   // De-structured props that were sent to this React Functional Componenet
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(   // useEffect is a hook that runs based on a condition or varable update. It hooks to the dependencies (variable/state/condition) and whenever that dependency updates it refires everything in it
        () => {
            async function fetchData() {    // Using an asynchronous function (used when requesting to external api) in the useEffect() because request can take different amount of time to respond
                const request = await axios.get(fetchUrl);  // Wait for the url https://api.themoviedb.org/3/fetchUrl to respond/comeback and then assign it to the request

                setMovies(request.data.results);    // Setting movies to the Movies that came back

                return request
            }

            console.log(fetchData());

        }, [fetchUrl]   // in this bracket we provide the condition that needs to be true or variable (that came from outside of useEffect() and is used inside) that needs to be updated, to run this code (if left empty it runs once the page loads)
    );

    const opts = {
        height: "390",  // Height be 390px
        width: "100%",  // Weight be 100% of the Screen
        playerVars: {
            autoplay: 1,    // Autoplay once
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {   // If trailerUrl is available that means it has been played
            setTrailerUrl('');  // Set it to empty to stop the trailer
        }
        else {
            console.log(movieTrailer(movie?.original_name || "")) // movieTrailer is a module of react-youtube, what it does is, it takes the movie name and find the youtube trailer of the movie
            .then(
                (url) => {  // Pass in the full Url of the movie trailer
                    console.log("URL: ", url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log("URL Params: ", urlParams);
                    setTrailerUrl(urlParams.get("v"));   // Pulling out the v part of the Url
                    console.log("Trailer Url is", trailerUrl);
                }
            )
            .catch(
                (error) => console.log(error),
                console.log("Error")
            );
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {
                    movies.map(     // map/loop through all the elements in movies
                        movie => (  // for current element in movies (aliased to movie) run this function
                            <img 
                                key={movie.id}  // Use the key (that tells react to update/render only that thing thats updated)
                                onClick={() => handleClick(movie)}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}      // row__posters for the container and if isLargeRow then row__posterLarge as well
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}    //  Render the image of the current element of movies if isLargeRow using base_url movie.poster_path else base_url movie.backdrop_path
                                alt={movie.name}
                            />
                        )
                    )
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row