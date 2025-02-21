import React from 'react'

import planingimg from '../../Accests/images/planimg.png'
import checked from '../../Accests/images/checked.png'

const Planning = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h1 className='tab_heading'>Business Planning and Development</h1>
                            <p className='tab_para'>At <span className='tab_span'>Codile</span> , we offer comprehensive solutions designed to guide your  <br />business through every stage of its journey.</p>
                        </div>

                        <div className='row'>
                            <div className="col-lg-6">
                                <div class="P_card mb-2">
                                    <h2 className="p_card_title">
                                        <span className="icon-wrapper">
                                            <img src={checked} alt="" className='check-circle' />
                                        </span>
                                        Roadmapping
                                    </h2>
                                    <p className="para_title">
                                        Our strategic roadmaps provide a
                                        roadmap for success, outlining the steps
                                        needed to reach your objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div class="P_card">
                                    <h2 className="p_card_title">
                                        <span className="icon-wrapper">
                                            <img src={checked} alt="" className='check-circle' />
                                        </span>
                                        Financial Modeling
                                    </h2>
                                    <p className="para_title">
                                        Forecasts to evaluating investment
                                        opportunities, we provide insights that
                                        empower informed decision-making.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className="col-lg-6">
                                <div class="P_card mb-2">
                                    <h2 className="p_card_title">
                                        <span className="icon-wrapper">
                                            <img src={checked} alt="" className='check-circle' />
                                        </span>
                                        Diversification
                                    </h2>
                                    <p className="para_title">
                                        Our team explores opportunities for
                                        market expansion and diversification,
                                        helping you reach new audiences.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div class="P_card">
                                    <h2 className="p_card_title">
                                        <span className="icon-wrapper">
                                            <img src={checked} alt="" className='check-circle' />
                                        </span>
                                        Operational Efficiency
                                    </h2>
                                    <p className="para_title">
                                        We assess your current processes and
                                        identify areas for improvement to enhance
                                        efficiency and reduce costs.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <div className="plan-img_con">
                                <img src={planingimg} alt="" className='plan_img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Planning
