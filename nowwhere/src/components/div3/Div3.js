import React from 'react';
import emailjs from 'emailjs-com'
import "./div3.css"


const Div3 = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_l4ny3xi', 'template_kzxmrir', e.target, 'user_R1OZ83HUVYQHGg8xmdAXy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    }
    return (
        <div className="flex-wrapper container">
            <div className="flexx ">
                <div className="flex-item1">
                    <h2>WE ARE ALL EXPLORERS</h2>
                    <p><strong>NOWwhere </strong>: A two-sided blockchain-backed intelligent NFT marketplace with a<br />‘NETFLIX-style’ recommend engine – indexing / scoring and ranking assets – connecting Collectors with Creators and vice versa.<br /><br />Developed by Content Creators who help major brands tell their stories. NOW collaborating with a world class development team to help artists elevate and focus their narrative.</p>

                </div>
                <div className="flex-item2">
                    <div className='flex-image'>
                        <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/themes/nowwhere/assets/images/circle.svg" />
                    </div>
                    <div className='flex-content'>
                        <h4>SIGN Up to Explore</h4>
                        <form onSubmit={sendEmail}>
                            <input type="text" placeholder='Enter your Email' name='email' />
                            <button type='submit'>Subscribe</button>
                        </form>
                        <p>The future of art</p>
                    </div>
                </div>

            </div>
        </div>




        /*
        <div className='row'>
            <div className="col-md-12">
            <div class="d-lg-flex align-items-center light-yellow-bg">flex
                <div className="col-lg-8 col-md-12">
                    <div>
                    <h2>WE ARE ALL EXPLORERS</h2>
                    <p><strong>NOWwhere </strong>: A two-sided blockchain-backed intelligent NFT marketplace with a<br/>‘NETFLIX-style’ recommend engine – indexing / scoring and ranking assets – connecting Collectors with Creators and vice versa.<br/><br/>Developed by Content Creators who help major brands tell their stories. NOW collaborating with a world class development team to help artists elevate and focus their narrative.</p>
                    </div>

                </div>
                <div className="col-lg-4 col-md-12 circle">
                <img src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/themes/nowwhere/assets/images/circle.svg"/>
                </div>
                </div>
            </div>


            </div>
            */
    );

}
export default Div3;