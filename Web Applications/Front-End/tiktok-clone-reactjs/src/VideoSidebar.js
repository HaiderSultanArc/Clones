import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';
import React, { useState } from 'react';
import "./VideoSidebar.css";

function VideoSidebar({ likes, messages, shares }) {
    const [liked, setLiked] = useState(false);
    
    
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {
                    liked ? (
                        <Favorite onClick={e => setLiked(false)} />
                    ) : (
                        <FavoriteBorder onClick={e => setLiked(true)} />
                    )
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            
            <div className="videoSidebar__button">
                <Message />
                <p>{messages}</p>
            </div>
            
            <div className="videoSidebar__button">
                <Share />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
