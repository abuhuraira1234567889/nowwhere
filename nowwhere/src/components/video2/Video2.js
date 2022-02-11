import React from 'react';
import ReactPlayer from 'react-player';
import './video2.css'
import Vedio2 from "../videos/Video2.mp4"

const Video2 = () => {
    return (
        <div className='container'>

        
        <video width="100%" height="100%" preload='auto' autoPlay muted loop src={Vedio2} />
        </div>
    );
}


export default Video2;