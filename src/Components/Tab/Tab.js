import React, { useState } from "react";
import { motion } from "framer-motion";
// images ............

import img1 from '../../Accests/images/tableftimg.png'
import img2 from '../../Accests/images/tableftimg2.png'
import img3 from '../../Accests/images/tableftimg3.png'
import img4 from '../../Accests/images/tableftimg.png'



const Tab = () => {
    const [selectedValue, setSelectedValue] = useState("value-1");
    const images = {
        "value-1": img1,
        "value-2": img2,
        "value-3": img3,
        "value-4": img4,
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        {/* left img  */}
                        {/* <img src={leftimg} alt="" className='tab_left_img' /> */}
                        <motion.img
                            key={selectedValue} // Forces re-render on change
                            src={images[selectedValue]}
                            alt="Selected"
                            className="tab_left_img"
                            initial={{ opacity: 0, x: -50 }} // Start off-screen
                            animate={{ opacity: 1, x: 0 }} // Fade in from left
                            exit={{ opacity: 0, x: -50 }} // Fade out left
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className=''>
                            <h2 className='tab_heading'>Content Creation and Marketing</h2>
                            <p className='tab_para'>strategic thinkers collaborates to craft compelling narratives that not  <br /> only captivate your audience but also drive meaningful engagement.</p>
                        </div>

                        <div className="inputmaindiv">
                            <div className="radio-input">
                                <label className="label">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        value="value-1"
                                        checked={selectedValue === "value-1"}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    />
                                    <p className="text">Crafting Compelling Narratives</p>
                                </label>

                                <label className="label">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        value="value-2"
                                        checked={selectedValue === "value-2"}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    />
                                    <p className="text">Strategic Content Marketing</p>
                                </label>

                                <label className="label">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        value="value-3"
                                        checked={selectedValue === "value-3"}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    />
                                    <p className="text">Building Authority and Trust</p>
                                </label>

                                <label className="label">
                                    <input
                                        type="radio"
                                        name="value-radio"
                                        value="value-4"
                                        checked={selectedValue === "value-4"}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    />
                                    <p className="text">Measurable Results</p>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Tab
