import React from 'react';
import ReactPlayer from 'react-player'
import './vedio.css'
import Vedio1 from "../videos/Vedio1.mp4"



const Vedio = () => {
    return (

        <div className=''>

        
        <video width="100%" height="100%" preload='auto' autoPlay muted loop src={Vedio1} />
        </div>
   /*   
        <div className='player-wrapper container'>
        <ReactPlayer

        className="react-player"
         url='https://www.youtube.com/watch?v=l1MYfu5YWHc'
         
         
         
         />
         

</div>
*/

    );
}


export default Vedio;