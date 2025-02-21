import React from 'react'

import shaped from '../../Accests/images/shape.png'
import cardInner from '../../Accests/images/cardinnerimg.png'

import shap_icon1 from '../../Accests/images/megaphone.png'
import shap_icon2 from '../../Accests/images/clock.png'
import shap_icon3 from '../../Accests/images/heart.png'
import shap_icon4 from '../../Accests/images/global.png'
import shap_icon5 from '../../Accests/images/wallet.png'

import bar from '../../Accests/images/bar.png'
import card from '../../Accests/images/credit.png'

const Carftsol = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {/* text  */}
                    <div className="banner-content">
                        <h1 className='craft_heading'> Crafting Solutions <br /> Tailored to You</h1>
                        <p className="craft_para">
                            At Codile, We take pride in offering a diverse range of solutions
                            meticulously crafted to meet your unique needs.
                        </p>
                    </div>


                    {/* Left side col  */}

                    {/* cards row */}
                    <div className="col-lg-6">
                        {/* big card  */}
                        <div className="craft_card">
                            <div className="img_wrapper">
                                <img src={shaped} alt="" className='iner_img' />
                            </div>
                            <h3 className="craft_card_heading">
                                Subscription
                            </h3>
                            <p className='craft_card_para'>
                                time is valuable, and your needs are unique. That's why we Ive curated a subscription                              offering designed to enhance your experience and simplify your life.
                            </p>

                            {/* tabs  */}
                            <div>
                                <div>
                                    <div class="notification">
                                        <div class="notiglow"></div>
                                        <div class="notiborderglow"></div>
                                        <div class="notititle">Welcome To Uiverse</div>
                                        <div class="notibody">Customize our subscription</div>
                                        <div class="right-arrow"><i class="fa fa-chevron-right"></i> </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="notification n2">
                                        <div class="notiglow"></div>
                                        <div class="notiborderglow"></div>
                                        <div class="notititle">Priority Access</div>
                                        <div class="notibody">Subscribers are our priority, gain early access</div>
                                        <div class="right-arrow"><i class="fa fa-chevron-right"></i> </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="notification n3">
                                        <div class="notiglow"></div>
                                        <div class="notiborderglow"></div>
                                        <div class="notititle"> Cost Savings and Value</div>
                                        <div class="notibody">Savings and added value with our subscription plans</div>
                                        <div class="right-arrow"><i class="fa fa-chevron-right"></i> </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="notification n4">
                                        <div class="notiglow"></div>
                                        <div class="notiborderglow"></div>
                                        <div class="notititle">Seamless Experience</div>
                                        <div class="notibody"> Benefits without the administrative burdens.</div>
                                        <div class="right-arrow"><i class="fa fa-chevron-right"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* small card  */}
                        <div className="craft_card2">
                            <div className="img_wrapper">
                                <img src={shaped} alt="" className='iner_img' />
                            </div>
                            <h3 className="craft_card_heading">
                                Tracking & Record
                            </h3>

                            <p className='craft_card_para'>
                                pivotal role that precision in tracking and record management plays in enhancing operational efficiency, ensuring compliance, and driving informed decision-making.
                            </p>

                            <div>
                                <img src={cardInner} alt="" className='crdinnerimg' />
                            </div>
                        </div>
                    </div>



                    {/* ------------------------------------ */}
                    {/* Right side col  */}
                    {/* ------------------------------------ */}


                    <div className="col-lg-6">
                        {/* small card  */}
                        <div className="craft_card2 craftcard22">
                            <div className="img_wrapper">
                                <img src={shaped} alt="" className='iner_img' />
                            </div>
                            <h3 className="craft_card_heading">
                                Advertising
                            </h3>
                            <p className='craft_card_para'>
                                captivates and resonates with your audience through our cutting-edge advertising                               solutions at Codile. In a world flooded with information, it's not just about being seen; it's
                                about being remembered.
                            </p>

                            <div className='d-flex'>
                                <div className="craft_img_wrapper">
                                    <img src={shap_icon1} alt="" className='craf_iner_img' />
                                </div>

                                <div className="craft_img_wrapper">
                                    <img src={shap_icon2} alt="" className='craf_iner_img' />
                                </div>

                                <div className="craft_img_wrapper">
                                    <img src={shap_icon3} alt="" className='craf_iner_img' />
                                </div>

                                <div className="craft_img_wrapper">
                                    <img src={shap_icon4} alt="" className='craf_iner_img' />
                                </div>

                                <div className="craft_img_wrapper">
                                    <img src={shap_icon5} alt="" className='craf_iner_img' />
                                </div>
                            </div>
                        </div>



                        {/* big card 2  */}
                        <div className="craft_card mt-2">
                            <div className="img_wrapper">
                                <img src={shaped} alt="" className='iner_img' />
                            </div>

                            <h3 className="craft_card_heading">
                                Efficient Management
                            </h3>
                            <p className='craft_card_para'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>

                            {/* z-index small card  */}

                            <div className="small_card">
                                <div class="notification small_noti">
                                    <div class="notiglow"></div>
                                    <div class="notiborderglow"></div>
                                    <div class="notititle smalltitle">Crafting Compelling</div>
                                    <div class="notibody smallbody">Customize our subscription</div>
                                    <div class="right-arrow smarrow"><i class="fa fa-chevron-right"></i> </div>
                                </div>

                                <div class="notification small_noti sm2 mt-2">
                                    <div class="notiglow"></div>
                                    <div class="notiborderglow"></div>
                                    <div class="notititle smalltitle">Content Marketing</div>
                                    <div class="notibody smallbody">Customize our subscription</div>
                                    <div class="right-arrow smarrow"><i class="fa fa-chevron-right"></i> </div>
                                </div>
                            </div>



                            {/* inner card  */}
                            <div className="inr_card">
                                <div>
                                    <h2 className="inr_card_title">
                                        <span className="icon-wrapper">
                                            <img src={bar} alt="" className='check-circle' />
                                        </span>
                                        Planning & Goals
                                    </h2>
                                    <p className="inr_para_title">
                                        Our strategic roadmaps provide a  roadmap for <br />success,  outlining the steps  needed to reach your objectives.
                                    </p>
                                </div>
                                {/* hr line */}
                                <hr class="custom-hr"></hr>
                                <div className='mt-4'>

                                    <h2 className="inr_card_title">
                                        <span className="icon-wrapper">
                                            <img src={bar} alt="" className='check-circle' />
                                        </span>
                                        Resource Allocation
                                    </h2>
                                    <p className="inr_para_title">
                                        Our strategic roadmaps provide a roadmap for success, outlining the steps needed to reach your objectives.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


        </div>
    )
}

export default Carftsol
