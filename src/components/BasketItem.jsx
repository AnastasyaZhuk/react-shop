import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    return (
        <li className="collection-item">
            {name}
            <i className="material-icons item-count" onClick={() => decQuantity(id)}>remove</i> {quantity} {''}
            <i className="material-icons item-count" onClick={() => incQuantity(id)}>add</i>= {price * quantity} ₽

            <span className="secondary-content basket-delete "
                  onClick={() => removeFromBasket(id)}>
                <i className="material-icons">delete</i>
            </span>
        </li>
    );
};

export default BasketItem;