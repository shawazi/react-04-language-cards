import React from "react";
import data from "../../helper/data";

// console.log(data)

const Cards = () => {
    return (
        data.map((item, index) => (
            <div className="card" key={item.name}>
                <h2>{item.name}</h2>
            </div>
        ))
    )
}

export default Cards;