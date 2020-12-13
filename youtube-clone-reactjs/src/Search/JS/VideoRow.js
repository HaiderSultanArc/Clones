import React from 'react';

function VideoRow({image, channel, title, subs, views, timestamp, description}) {
    return (
        <div className="videoRow" >
            <img src={image} alt={title} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline" >
                    {channel} . <span className="videoRow__subs" ><span className="videoRow__subsNumber" >{subs}</span> Subscribers</span> {views} views . {timestamp}
                </p>
                <p className="videoRow__description" >{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
