import React, {useState, useEffect} from 'react'
import axios from './axios';    // axios is the default export (instance) from the file axios.js
import requests from "./requests";
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(   // useEffect is a hook that runs based on a condition or varable update. It hooks to the dependencies (variable/state/condition) and whenever that dependency updates it refires everything in it
        () => {
            async function fetchData() {    // Using an asynchronous function (used when requesting to external api) in the useEffect() because request can take different amount of time to respond
                const request = await axios.get(requests.fetchNetflixOriginals);  // Wait for the url https://api.themoviedb.org/3/fetchUrl to respond/comeback and then assign it to the request

                setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);    // Randomly Select one of the element from the request.data.results array and set it to movie
                
                return request
            }

            fetchData();

        }, []   // in this bracket we provide the condition that needs to be true or variable (that came from outside of useEffect() and is used inside) that needs to be updated, to run this code (if left empty it runs once the page loads)
    );

    function truncate(str, n) {
        return str?.length > n? str.substr(0, n - 1) + "...": str;
    }
        
    return (
        <header 
            className="banner" 
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }
            }
        >
            <div className="banner__contents">
                <h1 className="banner__title" >
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
