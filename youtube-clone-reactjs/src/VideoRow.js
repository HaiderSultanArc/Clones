import React from 'react';
import "./VideoRow.css";

function VideoRow({image, channel, title, subs, views, timestamp, description}) {
    return (
        <div className="videoRow" >
            <img src={image} alt={title} />
            <div className="videoROw__text">
                <h3>{title}</h3>
                <p className="videoRow__headline" >
                    {channel} . {subs} Subscribers {views} views . {timestamp}
                </p>
                <p className="videoRow__description" >{description}</p>
                
            </div>
        </div>
    )
}

export default VideoRow
