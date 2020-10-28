import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="Haider Sultan" src="/static/images/avatar/1.jpg" />

                <h3>{username}</h3>
                {/* Header -> Avatar + Username */}
            </div>

            <img className="post__image" src={imageUrl} alt="" />
            {/* Image */}

            <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
            {/* Username + Caption*/}
        </div>
    )
}

export default Post
