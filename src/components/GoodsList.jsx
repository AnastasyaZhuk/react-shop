import React from 'react';
import GoodItem from "./GoodItem";

const GoodsList = (props) => {
    const {
        goods = []
    } = props;

    if (goods.length === 0) {
        return <h3>Nothing here</h3>
    }

    console.log('GoodsList ', props);


    return (
        <div className="goods">
            {goods.map(item => (
                <GoodItem key={item.mainId} {...item}/>
            ))}
        </div>
    );
};

export default GoodsList;