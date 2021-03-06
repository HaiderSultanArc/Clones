import Avatar from "@material-ui/core/Avatar";
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Post.css';

function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    // const [likes, setLike] = useState(0);

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
                <Avatar className="post__avatar" alt={username} src="/static/images/avatar/1.jpg" />
                <text className="post__username">{username}</text>
            </div>

            <img className="post__image" src={imageUrl} alt="" />

            <div className="post__likes">
                <img src='./assets/like.png' alt="Like" />
            </div>

            <div className="post__text"><text className="post__username">{username}</text><text className="post__caption">{caption}</text></div>

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
                        <button disabled={!comment} className="post__button" type="submit" onClick={postComment}><strong>Post</strong></button>
                    </form>
                )
            }
            
        </div>
    )
}

export default Post
