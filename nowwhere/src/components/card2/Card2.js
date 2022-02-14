import React from 'react';
import "./Card2.css"

const Card2 = () => {
    return (
        <>
            <div className="card2-wrapper ">

                <div className="container card2-container">
                    <div className="card2">
                        <div className="card2-header">

                        <div className='card2-img'>
                            <img className='card2-img1' src="https://bscinfo.wault.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png?1632009600316" alt="" />
                            <img className='card2-img2' src="https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png" alt="" />
                        </div>

                        <div className="header-content">
                            <h2> CAKE-BNB</h2>
                            <div className="header-para">
                            <p>Core</p>
                            <p>40X</p>
                            </div>
                        </div>

                        </div>

                        <div className="card2-body">
                            <div className="body-content">
                                <div className="apr">
                                    <div className="apr-content">
                                    <p>APR</p>
                                    </div>
                                    <div className="apr-no">
                                        <p>36.13%</p>
                                    </div>
                                </div>
                                <div className="apr">
                                    <div className="apr-content">
                                    <p>Earn</p>
                                    </div>
                                    <div className="apr-no">
                                        <p>CAKE+Fees</p>
                                    </div>
                                </div>
                                <div className='cake-earned'>
                                    <p>CAKE Earned</p>

                                    <div className="earned">
                                    <div className="earned-content">
                                    <p>APR</p>
                                    </div>
                                    <div className="earbed-btn">
                                        <p>36.13%</p>
                                    </div>
                                </div>



                                </div>
                                <div className="body-btn">
                                    <p>Cake-BNB</p>
                                    <button>Connect Button</button>
                                </div>
                            </div>
                            <hr />


                        </div>
                        <div className="deatail">
                            <p>Detail</p>
                        </div>

                    </div>
                </div>

            </div>



        </>
    );
}

export default Card2;