import React from "react"
import "./ShopMerch.css";
import ItemCard from "./ItemCard";
import data from "./data";
// import TopMain from "../images/topMain.png"

export default function ShopMerch() {

    return (
        <>
        <section id="merch">
            <div className="row">
                {data.productData.map((item, index) => {
                        return (
                            <ItemCard
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index} 
                            />
                        )
                    })}
            </div>
        </section>
        </>

    )
}