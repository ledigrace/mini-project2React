import React from "react"
import "./ShopMerch.css";
// import TopMain from "../images/topMain.png"
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {
    const { addItem } = useCart();

    return (
        <>
            <div className="col-md-4">
                <div className="merch-item">
                    <img className="item-img" src={props.img} alt="Main Character"/>
                    <h4 className="item-name">{props.title}</h4>
                    <div className="item-rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-half-full checked"></span>
                    </div>
                    <p className="item-price">₱ {props.price}</p>
                    <button className="cartBtn" onClick={() =>addItem(props.item)}><i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART</button>
                </div>
            </div>
        </>
    );
};

export default Itemcard;

