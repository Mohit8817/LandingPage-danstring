import React from 'react'
import iconimg from '../../Accests/images/nnnnnnn.png'
const Banner = () => {
    return (
        <div>

            <div className="banner">
                <div className="banner-content">
                    <h1 className='banner-title'>One<span> <img src={iconimg} alt="" className='imgicon' /></span> Click
                        <br />Maximizing impact </h1>
                    <p className='banner-subtitle'>Unlock a world of possibilities for your brand. Our streamlined approach ensures that <br /> you can maximize your online presence, engagement, and conversions effortlessly.</p>
                    <div className='d-flex btn_col'>
                        <button>Get Started
                            <div class="arrow-wrapper">
                                <div class="arrow"></div>
                            </div>
                        </button>
                        <button className='btn2'>Get Started
                            <div class="arrow-wrapper">
                                <div class="arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
