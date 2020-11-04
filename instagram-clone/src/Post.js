import React, { useState, useEffect } from 'react';
import './Post.css';
import { db } from './firebase';
import Avatar from "@material-ui/core/Avatar";
import firebase from 'firebase';

function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;

        if (postId) {
            unsubscribe = db.collection("posts").doc(postId).collection("comments").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {  // Go to the firebase database collections "posts" and get document with the id "postId" and go to it's collections "comments" and listen or keep track of the snapshots of each document
                setComments(snapshot.docs.map((doc) => doc.data())); // Set the comments to the data in the documents snapshot
            });
        }

        return () => {
            unsubscribe();
        }

    }, [postId]);   // postId is included as a dependency because it is used inside the useEffect. If it changes it will refire the useState

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setComment('');
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="Haider Sultan" src="/static/images/avatar/1.jpg" />
                <h3>{username}</h3>
            </div>

            <img className="post__image" src={imageUrl} alt="" />

            <h4 className="post__text"><strong>{username}</strong>{caption}</h4>

            <div className="post__comments">
                {
                    comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))
                }
            </div>
            
            {
                user && (
                    <form className="post__commentBox">
                        <input className="post__input" type="text" placeholder="Add a Comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button disabled={!comment} className="post__button" type="submit" onClick={postComment}>Post</button>
                    </form>
                )
            }
            
        </div>
    )
}

export default Post
