import React from 'react';
import ReactPlayer from 'react-player';
import './video3.css'
import Vedeo3 from "../videos/Vedio3.mp4"

const Video3 = () => {
    return (
    

<div className='container'>

        
<video width="100%" height="100%" preload='auto' autoPlay muted loop src={Vedeo3} />
</div>



    
    
    );
}


export default Video3;