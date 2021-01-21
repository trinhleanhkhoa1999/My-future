import React, { useState } from 'react'
import './styelesCard.scss'
import product1 from "../../img/product-1.jpg"
import product2 from "../../img/product-2.jpg"
import product3 from "../../img/product-3.jpg"
import product4 from "../../img/product-4.jpg"
import product5 from "../../img/product-5.jpg"
import product6 from "../../img/product-6.jpg"

export default function Card() {
    const [card, setcard] = useState([
        {
            img: product1,
            title: "BELL PEPPER",
            price1: 120.000,
            price2: 80.000,
            view: 1.200,
            like: 1.200,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error quasi reprehenderit accusantium debitis quae totam dicta, illo suscipit fuga quos ipsa inventore natus optio veniam voluptatem vel quo est?"

        },
        {
            img: product2,
            title: "Strawberry",
            price1: 50.000,
            price2: 20.000,
            view: 1.200,
            like: 1.200,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error quasi reprehenderit accusantium debitis quae totam dicta, illo suscipit fuga quos ipsa inventore natus optio veniam voluptatem vel quo est?"
        },
        {
            img: product3,
            title: "Green Beans",
            price1: 50.000,
            price2: 20.000,
            view: 1.200,
            like: 1.200,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error quasi reprehenderit accusantium debitis quae totam dicta, illo suscipit fuga quos ipsa inventore natus optio veniam voluptatem vel quo est?"
        },
        {
            img: product4,
            title: "Purple Cabbage",
            price1: 50.000,
            price2: 20.000,
            view: 1.200,
            like: 1.200,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error quasi reprehenderit accusantium debitis quae totam dicta, illo suscipit fuga quos ipsa inventore natus optio veniam voluptatem vel quo est?"
        },
        {
            img: product5,
            title: "Tomatoe",
            price1: 50.000,
            price2: 20.000,
            view: 1.200,
            like: 1.200,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error quasi reprehenderit accusantium debitis quae totam dicta, illo suscipit fuga quos ipsa inventore natus optio veniam voluptatem vel quo est?"
        },
        {
            img: product6,
            title: "Fruit Juice",
            price1: 50.000,
            price2: 20.000,
            view: 1.200,
            like: 1.200,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error quasi reprehenderit accusantium debitis quae totam dicta, illo suscipit fuga quos ipsa inventore natus optio veniam voluptatem vel quo est?"
        },
    ])
    var element = card.map((item, index) => {
        return <div className="col-lg-4 col-md-6 col-sm-12" key={index}> <div className="product">
            <div className="product-body">
                <div className="card">
                    <div className="imgBx">
                        <a href="/">
                        <img src={item.img} alt="" />
                        </a>
                        
                    </div>
                    <div className="content">
                        <div className="content-icon">
                            <i class="fas fa-bars"></i>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <i class="far fa-heart"></i>
                            <i class="fas fa-sync-alt" aria-hidden="true"></i>
                        </div>
                        <h3>{item.title}</h3>
                        <div className="content-price">
                            <span style={{ textDecoration: "line-through", opacity: "0.5", }}>{item.price1}$</span>
                            <span>{item.price2}$</span>
                        </div>
                        <div className="content-view">
                            <h6><strong style={{ color: "#33333" }}>View:</strong>{item.view}K</h6>
                            <h6><strong>Like:</strong>{item.like}K</h6>
                        </div>

                    </div>
                </div>
                <div className="cusContent m-0">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            </div>

        </div>
        </div>
    })

    return (
        <div>
            {/* {element} */}
            <div className="container">
                <div className="row">
                    {element}
                </div>




            </div>
        </div>
    )
}
