import React from 'react'
import hinh1 from '../../img/bg_1.jpg'
import hinh2 from '../../img/bg_2.jpg'
import hinh3 from '../../img/bg_3.jpg'
import './stylesSP.scss'

export default function Support() {
    return (
        <div>
            {/* carosel */}
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hinh1} alt="Los Angeles" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src={hinh2} alt="Chicago" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                        <img src={hinh3} alt="New York" width={1100} height={500} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{height:"100%", width:"50px"}} />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" style={{height:"100%", width:"50px"}} />
                </a>
            </div>
            {/* carosel */}
            {/* carosel phan tiep */}
          
        </div>
    )
}
