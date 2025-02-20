import React from 'react'

import achiveimg from '../../Accests/images/Achivementimg.png'

const Achivement = () => {
    return (
        <div>

            <div className="container">
                {/* text Row  */}
                <div className='row'>
                    <div className="banner-content">
                        <h1 className='Achiv_heading'>Achievements That Define Our Success!</h1>
                        <p className="Achiv_para">
                            Step into a world of accolades and achievements that underscore our commitment to excellence at Codile.
                        </p>
                    </div>
                </div>



                <div className="row ">

                    <div className="d-flex Achiv_div">

                        <div>
                            <div className="Achiv_col  ">
                                <h2 className='achive_head'>2020</h2>
                                <img src={achiveimg} alt="" className='achive_img' />
                            </div>
                            <div>
                                <p className='achive_c_para'>Excellence in <br />           Innovation Award</p>
                            </div>
                        </div>


                        <div>
                            <div className="Achiv_col  ">
                                <h2 className='achive_head'>2021</h2>
                                <img src={achiveimg} alt="" className='achive_img' />
                            </div>
                            <div>
                                <p className='achive_c_para'>Pinnacle of Performance <br />
                                    Recognition</p>
                            </div>
                        </div>

                        <div>
                            <div className="Achiv_col  ">
                                <h2 className='achive_head'>2022</h2>
                                <img src={achiveimg} alt="" className='achive_img' />
                            </div>
                            <div>
                                <p className='achive_c_para'>Masters of Team <br />
                                    Collaboration Honor</p>
                            </div>
                        </div>

                        <div>
                            <div className="Achiv_col  ">
                                <h2 className='achive_head'>2023</h2>
                                <img src={achiveimg} alt="" className='achive_img' />
                            </div>
                            <div>
                                <p className='achive_c_para'>Outstanding Customer <br />
                                    Experience Distinction</p>
                            </div>
                        </div>


                        <div>
                            <div className="Achiv_col  ">
                                <h2 className='achive_head'>2024</h2>
                                <img src={achiveimg} alt="" className='achive_img' />
                            </div>
                            <div>
                                <p className='achive_c_para'>Visionary Leadership <br />
                                    Accolade</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>


    )
}

export default Achivement
