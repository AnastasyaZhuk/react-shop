import React, {useContext} from 'react';
import {ShopContext} from "../../context";

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity
    } = props;

    const {
        removeFromBasket,
        incQuantity,
        decQuantity
    } = useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}
            <i className="material-icons item-count" onClick={() => decQuantity(id,quantity)}>remove</i> {quantity} {''}
            <i className="material-icons item-count" onClick={() => incQuantity(id)}>add</i>= {price * quantity} ₽

            <span className="secondary-content basket-delete "
                  onClick={() => removeFromBasket(id)}>
                <i className="material-icons">delete</i>
            </span>
        </li>
    );
};

export default BasketItem;