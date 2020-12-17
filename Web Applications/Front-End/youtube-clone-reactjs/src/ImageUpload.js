import { Button } from '@material-ui/core';
import firebase from 'firebase';
import React, { useState } from 'react';
import { db, storage } from './firebase';
import './ImageUpload.css';
 
function ImageUpload({username}) {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    // const [url, setURL] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {   // handleChange is the function that fireoff an event that uploads the file
        if (e.target.files[0]) {    // From target in event pick the first file that exists
            setImage(e.target.files[0]);    // set the Image to the file we picked
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);   // Get the reference of the images/image.name (the image we selected) and put that image into the storage on firebase
        
        uploadTask.on(  // This is a listener that listens to the state_changer event
            "state_changed",    // event: string (Event that the listener will listen to or keep track of)

            (snapshot) => { // (snapshot: firebase.storage.UploadTaskSnapshot) => any. Gives snapshot of all the changes or updates that happens
                // Progress Function...
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);   // This equation will give us the progress from 0 to 100

                setProgress(progress);  // set the progress between 0 and 100
            },

            (error) => {    // error: firebase.storage.FirebaseStorageError) => any. Returns the Error (if any) that occurs
                // Error Function...
                console.log(error);
                alert(error.message);
            },

            () => { //  complete?: firebase.Unsubscribe. Returns what happens after completion of the process
                // Complete Function
                storage.ref("images").child(image.name).getDownloadURL().then(url => {  // Go to the reference images in the storage on firebase and get the download URL of the image name of the selected image from the images and then do something with that URL
                    // Post the image inside db
                    db.collection("posts").add({    // In posts collection on firebase database add something
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(), // add a timestamp, which is the server time of Firebase
                        caption: caption,   // add caption that we stored in caption state
                        imageUrl: url,   // add imageUrl that will be the url of the image we just uploaded on the firebase
                        username: username  // add username that we set for the user
                    })
                });

                setProgress(0);
                setCaption('');
                setImage(null);
            }
        )
    }

    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100" />

            <input type="text" placeholder="Enter a Caption..." onChange={event => setCaption(event.target.value)} value={caption} /> {/* onChange will fireoff an event for every key pressed that will set it in the caption */}
            <input type="file" onChange={handleChange} />

            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}
 
export default ImageUpload