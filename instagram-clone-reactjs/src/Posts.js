import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import Post from './Post';

function Posts({user, setUser}) {
    const [posts, setPosts] = useState([]); // This is a State, posts is the name of the state and it's value is set using setPosts
    
    useEffect(
        () => { // It's a listener that listens for any change happen to the front-end states (In this case user and username)
            const unsubscribe = auth.onAuthStateChanged(
                (authUser) => { // onAuthStateChanged() is a listener that listens for any single time, any authentication change happens at the backend
                    if (authUser) { // If User is authenticated
                        // User has Logged In
                        setUser(authUser);
                    }
                    else {  // If User is not authenticated or logged out ("de-authenticated")
                        // User has Logged Out
                        setUser(null);
                    }
                }
            )

            return () => {  // This basically saves duplication of listener auth.onAuthStateChanged(), which is a backend listener, while useEffect is a front-end listener.
                // perform some cleanup actions so it does'nt spam
                unsubscribe();
            }

        }, []
    );

    // useEffect -> Runs a piece of code based on a specific condition
    useEffect(
        () => {
        // db.collections has all the collections on firebase of this application
            db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(
                snapshot => {  // Go to the posts collection in firebase database in order of timestamp and get a snapshot of each document
                    // onSnapshot() is a very powerful listener, every single time a document is modified or updated it works like a camera and takes a snapshot of the changes
                    setPosts(
                        snapshot.docs.map(
                            doc => (
                                {  // setPosts is used to update the state posts. Map through all the documents and get their snapshot
                                    id: doc.id, // ID of the document on the Firebase
                                    post: doc.data()  // Data of the Document on the Firebase
                                }
                            )
                        )
                    )
                }
            );

        }, []
    )  // Empty braces means code runs one time and if a variable is written it will load everytime that variable is changed

    
    return (
        <div className="app__posts">
            <div className="app__postsLeft">
                {
                    // map() will loop through all the objects of posts and set the object to post i.e post = posts.object[i]
                    posts.map(
                        ({ id, post }) => (
                            <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />  // key = {id} here basically tells react that only to render the object with that specific key, so it will not render all the old objects just for one single object
                        )
                    )
                }
            </div>

            {
                user?.displayName ? (
                    <div className="app__postsRight">
                        <div className="app__user">
                            <Avatar className="post__avatar" alt={user.displayName} src="/static/images/avatar/1.jpg" />
                            <text className="post__username">{user.displayName}</text>
                            
                            <div className="app__userButton">
                                <Button onClick={() => auth.signOut()}>Logout</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="app__postsRight">
                        <div className="app__user">
                            <Avatar className="post__avatar" alt="" src="/static/images/avatar/1.jpg" />
                            <text className="post__username">Please Login</text>
                        </div>
                    </div>
                )
            }
      </div>
    )
}

export default Posts;