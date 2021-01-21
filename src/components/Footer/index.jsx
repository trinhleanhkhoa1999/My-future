import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./stylesFooter.scss"
export default function Footer() {
    const state = useSelector(state => state)
    const [khoa, setkhoa] = useState(3456478)

    return (
        <div>
            {/* footer1 */}
            <div className="bg-light">
                <div className="container ">
                    <div className="row footer1 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h4>Subcribe to our Newsletter</h4>
                            <p>{khoa}</p>
                            <p>{state.Khoa}</p>
                            <p>Get e-mail updates about our latest shops and special offers</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <form>
                                <div className="d-flex">
                                    <input className="w-100" type="text" placeholder="Enter email address"></input>
                                    <button className="btn btn-primary" type="submit">sunmit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer1 */}

            {/* footer2*/}
            <div className="container pt-5">
                <div className="row footer2">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div>
                            <h4>Vegefoods</h4>
                            <ul>
                                <li>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                        <div>
                            <h4>Menu</h4>
                            <ul>
                                <li><a href="/">Shop</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Journal</a></li>
                                <li><a href="/">Contact US</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6 col-6">
                        <div>
                            <h4>Help</h4>
                            <ul>
                                <li><a href="/">Shop</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Journal</a></li>
                                <li><a href="/">Contact US</a></li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div>
                            <h4>Have a Questions?</h4>
                            <ul>
                                <li><span class="fas fa-map-marker-alt"></span>: ********</li>
                                <li><span class="far fa-envelope"></span>:  ********</li>
                                <li><span class="fas fa-mobile-alt"></span>: 0932704521</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer2*/}
            <div className="container">
                <div className="row m-0">
                    <span class="fab fa-instagram"></span>
                    <span class="fab fa-facebook-f mr-5 ml-5"></span>
                    <span class="fab fa-twitter"></span>
                </div>
            </div>

        </div>

    )
}
