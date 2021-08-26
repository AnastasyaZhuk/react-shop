import React from 'react';
import GoodItem from "./GoodItem";

const GoodsList = (props) => {
    const {
        goods = [],
        addToBasket
    } = props;

    if (goods.length === 0) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodItem addToBasket={addToBasket} key={item.mainId} {...item}/>
            ))}
        </div>
    );
};

export default GoodsList;