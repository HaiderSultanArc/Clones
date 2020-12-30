import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);  // Reference to the Video
    
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    
    return (
        <div className="video">
            <video className="video__player" 
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src="C:/Users/Maham/Documents/HS/Web Development/tiktoc-clone-reactjs/src/testVideo.mp4"
                type="video/mp4"
            >        
            </video>
            
            <VideoFooter />
        </div>
    )
}

export default Video