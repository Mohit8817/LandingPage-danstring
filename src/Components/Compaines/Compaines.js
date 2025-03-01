import React from 'react'


import logo1 from '../../Accests/images/logo1 (1).png'
import logo2 from '../../Accests/images/logo1 (2).png'
import logo4 from '../../Accests/images/logo1 (3).png'
import logo5 from '../../Accests/images/logo1 (4).png'
import logo6 from '../../Accests/images/logo1 (5).png'
import logo7 from '../../Accests/images/logo1 (7).png'

const Compaines = () => {
    return (
        <div>

            <div className="container">
                <div className="col">
                    <div className="row">
                        <div className="banner-content">
                            <h1 className='comp_heading'>80+ Companies Trust with Us!</h1>
                            <p className="comp_para">
                                Our commitment to excellence, innovative strategies!
                            </p>

                        </div>
                    </div>
                </div>
            </div>




            {/* Logo container  */}
            <div className="container-fluid">
                <div className="row mt-0 pt-0">
                    <div className="Logo_div">
                        <div className="logo_col">
                            <img src={logo1} className="logo_img" alt="Logo 1" />
                        </div>
                        <div className="logo_col">
                            <img src={logo2} className="logo_img" alt="Logo 2" />
                        </div>
                        <div className="logo_col">
                            <img src={logo7} className="logo_img" alt="Logo 4" />
                        </div>
                        <div className="logo_col">
                            <img src={logo5} className="logo_img" alt="Logo 5" />
                        </div>
                        <div className="logo_col">
                            <img src={logo6} className="logo_img" alt="Logo 6" />
                        </div>
                        <div className="logo_col">
                            <img src={logo4} className="logo_img" alt="Logo 7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Compaines
