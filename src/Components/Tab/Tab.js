import React from 'react'

const Tab = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    </div>

                    <div className="col-lg-6">

                        <div>
                            <h2 className='tab_heading'>Content Creation and Marketing</h2>
                            <p className='tab_para'>strategic thinkers collaborates to craft compelling narratives that not  <br /> only captivate your audience but also drive meaningful engagement.</p>
                        </div>


                        <div className='mb-5 pb-5'>
                            <div class="radio-input">
                                <label class="label">
                                    <input type="radio" id="value-1" name="value-radio" value="value-1" />
                                    <p class="text">Crafting Compelling Narratives</p>
                                </label>
                                <label class="label">
                                    <input type="radio" id="value-2" name="value-radio" value="value-2" />
                                    <p class="text">Strategic Content Marketing</p>
                                </label>
                                <label class="label">
                                    <input type="radio" id="value-3" name="value-radio" value="value-3" />
                                    <p class="text">Building Authority and Trust</p>
                                </label>

                                <label class="label">
                                    <input type="radio" id="value-3" name="value-radio" value="value-3" />
                                    <p class="text">Measurable Results</p>
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
