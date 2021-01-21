import './stylesHeader.scss'

export default function Header() {
    return (
        <div>
            <div className="header1" id="id">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                            <div className="phone d-flex">
                                <i class="fas fa-mobile-alt mr-1"></i>
                                <p>    + 0932 704 521</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="phone d-flex">
                                <i class="far fa-paper-plane mr-3"></i>
                                <p> trinhleanhkhoa1999@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                            <div>
                                <p> 3-5 BUSINESS DAYS DELIVERY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                            <div className="logo">
                                <h4><b>Vegefoods</b></h4>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <div >
                                <nav>
                                    <ul className="d-flex level1">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="d-flex" style={{justifyContent:'center'}}>
                                            <a href="/">Shop </a><span class="fas fa-sort-down ml-2" style={{color:'#82ae46', fontSize:'15px', position:'relative', top:'12px', left:'-3px'}}></span>
                                            <ul className="level2">
                                                <li>Shop</li>
                                                <li>Shop</li>
                                                <li>Shop</li>
                                                <li>Shop</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/">About</a>
                                        </li>
                                        <li>
                                            <a href="/">Blog</a>
                                        </li>
                                        <li>
                                            <a href="/">Contact</a>
                                        </li>
                                        <li>
                                            <i class="fa fa-shopping-bag" aria-hidden="true">[0]</i>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
