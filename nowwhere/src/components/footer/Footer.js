import React from 'react';
import './footer.css'

const Footer = () => {

    const footerarr=[
        {
            anchor:"https://www.instagram.com/explore_nowwhere/",
            fimg:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/instagram.svg"
        },
        {
            anchor:"https://twitter.com/NOWwhereart",
            fimg:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/twitter.svg"
        },
        {
            anchor:"https://www.youtube.com/channel/UCOm3TmImypOImgIiSbkgY5Q/featured",
            fimg:"https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/youtube.svg"
        }
    ]
    return (

        <div className='container footer-wrapper'>
            <div className="row">
                <div className="col-md-8 ">
                    <a href="https://nowwhere.io/">

                        <img className='footer-img' src="https://eadn-wc03-4642427.nxedge.io/cdn/wp-content/uploads/2021/06/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="col-md-4 justify-content-end  footer-content">
                    {
                        footerarr.map((footer)=>(
                            <a href={footer.anchor} target="_blank">
                            <img src={footer.fimg} alt="NOWwhere" />
                    </a>

                        ))
                    }
                   
                </div>


            </div>

            <div className="row">
                <div class="copyright col-md-12 text-center">
                    © 2021 NOWWHERE				</div>
            </div>


        </div>
    );
}


export default Footer;