import React from 'react'
import "./stylesCategory.scss"

export default function Category() {
    return (
        <div>
            <div className='container'>

                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    <img className="w-100 pb-4" src="https://preview.colorlib.com/theme/vegefoods/images/category-1.jpg" alt=''></img>
                                </div>
                                <div>
                                    <img className="w-100 pb-4" src="https://preview.colorlib.com/theme/vegefoods/images/category-2.jpg" alt=''></img>
                                </div>
                            </div>
                            <div className="col-6 category mb-4">
                            <div className="textCategory">
                                <h2>Vegetables</h2>
                                <span>Protect the health of every home</span>
                                <button className="btn btn-success">Shop now</button>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div>
                                    <img className="w-100 pb-4" src="https://preview.colorlib.com/theme/vegefoods/images/category-1.jpg" alt=''></img>
                                </div>
                                <div>
                                    <img className="w-100 pb-4" src="https://preview.colorlib.com/theme/vegefoods/images/category-2.jpg" alt=''></img>
                                </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
