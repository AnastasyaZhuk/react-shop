import React from 'react';
import BasketItem from "./BasketItem";

const BasketList = (props) => {
    const {
        order,
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item blue darken-4 active">Корзина</li>
            {order.length
                ? order.map(item => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
                : <li className="collection-item blue darken-4 active">Корзина пуста</li>
            }
            <li className="collection-item">
                Общая стоимость: {totalPrice}₽
            </li>
            <li className="collection-item">
                <button className="btn btn-small blue darken-4">Оформить заказ</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    );
};

export default BasketList;