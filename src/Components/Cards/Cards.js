import React from 'react'
import innerimg from '../../Accests/images/newimg22.png'
import innerimg2 from '../../Accests/images/cardimg2.png'

const Cards = () => {
    return (
        <div>
            <div className="container">
                <div className="row text-center m-auto">
                    <div className="col">
                        {/* card first  */}
                        <div class="firstCard">
                            <p className='card_title'>Mastering the Art of <br />
                                Digital Marketing</p>
                            <img src={innerimg} alt="" className='cardimg1' />
                            <p className="para_title">
                                A program that goes beyond the basics, offering you a deep dive into the art and science of digital marketing. Explore cutting-edge strategies, master data-driven decision-making, and gain hands-on experience with real-world projects.
                            </p>
                            <button className='card_Btn'>Learn More
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* card Second  */}
                    <div className="col">
                        <div class="card2">
                            <img src={innerimg2} alt="" className='card_img_2' />
                        </div>
                    </div>


                    {/* card third  */}
                    <div className="col mb-5">
                        <div class="card3">
                            <p className='card_title'>Satisfied Customers</p>
                            <h2 className="card_number">
                                <span className="icon-wrapper">
                                    <i className="fa fa-heart"></i>
                                </span>
                                15.823
                            </h2>
                            <p className="para_title">
                                Our tailored solutions empower brands to excel, <br /> delivering impactful results that drive growth and innovation in the ever-evolving digital landscape.
                            </p>
                        </div>

                        <div class="card3">
                            <p className='card_title'>Potential in the B2B Startup Realm</p>
                            <p className="para_title">
                                Commitment to excellence, agility, and forward-thinking
                                positions us as the catalyst for your business growth
                            </p>

                            <div class="custom-container">
                                <div role="alert" class="custom-alert">
                                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" class="custom-icon" xmlns="http://www.w3.org/2000/svg" >

                                        <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" ></path>
                                    </svg>
                                    <p class="custom-text">
                                        Info - This is some information for you.
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

export default Cards
