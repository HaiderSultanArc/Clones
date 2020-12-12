import Avatar from "@material-ui/core/Avatar";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';

function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);
    const [numOfComments, setNumOfComments] = useState(0);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(
        () => {
            let getComments;
            
            if (postId) {
                getComments = db.collection("posts").doc(postId).collection("comments").orderBy('timestamp', 'desc').onSnapshot(
                    (snapshot) => {  // Go to the firebase database collections "posts" and get document with the id "postId" and go to it's collections "comments" and listen or keep track of the snapshots of each document
                        setComments(
                            snapshot.docs.map(
                                (doc) => doc.data()
                            )
                        ); // Set the comments to the data in the documents snapshot
                    }
                );
                
                db.collection("posts").doc(postId).onSnapshot(
                    (snapshot) => {
                        setLikes(
                            snapshot.data().numberOfLikes
                        )
                        
                        setNumOfComments(
                            snapshot.data().numberOfComments
                        )
                    }
                )
            }

            return () => {
                getComments();
            }

        }, [postId]
    );   // postId is included as a dependency because it is used inside the useEffect. If it changes it will refire the useState

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add(
            {
                text: comment,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        
        db.collection("posts").doc(postId).update(
            {
                numberOfComments: firebase.firestore.FieldValue.increment(1)
            }
        )

        setComment('');
    }
    
    const postLike = (event) => {
        event.preventDefault();
        
        setIsPressed(!isPressed);
        
        isPressed ? (
            db.collection("posts").doc(postId).update(
                {
                    numberOfLikes: firebase.firestore.FieldValue.increment(-1)
                }
            )
        ) : (
            db.collection("posts").doc(postId).update(
                {
                    numberOfLikes: firebase.firestore.FieldValue.increment(1)
                }
            )
        )
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt={username} src="/static/images/avatar/1.jpg" />
                <text className="post__username">{username}</text>
            </div>

            <img className="post__image" src={imageUrl} alt="" />
            
            <div className="post__public">
                <div className="post__publicButtons">
                    {
                        isPressed ? (
                            <Favorite className="post__likeButtonPressed" onClick={postLike} />
                        ) : (
                            <FavoriteBorderOutlined className="post__likeButton" onClick={postLike} />
                        )
                    }
                </div>
                
                <p className="post__likes">{likes}</p>
            </div>
            
            <div className="post__text">
                <p className="post__username">{username}</p>
                <p className="post__caption">{caption}</p>
            </div>
            
            <p className="post__numOfComments">View all {numOfComments} Comments</p>
            
            <div className="post__comments">
                {
                    comments.map(
                        (comment) => (
                            <p>
                                <span className="post__commentUsername" >{comment.username}</span>{comment.text}
                            </p>
                        )
                    )
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
