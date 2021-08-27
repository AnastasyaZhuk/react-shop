import React, {useContext} from 'react';
import GoodItem from "./GoodItem";
import {ShopContext} from "../../context";

const GoodsList = () => {
    const {
        goods = []
    } = useContext(ShopContext);

    if (goods.length === 0) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodItem key={item.mainId} {...item}/>
            ))}
        </div>
    );
};

export default GoodsList;