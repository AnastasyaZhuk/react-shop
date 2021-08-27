import React, {useEffect, useContext} from 'react';
import GoodsList from "./catalog/GoodsList";
import Preloader from "./Preloader";
import {API_KEY, API_URL} from "../config";
import Cart from "./Cart";
import BasketList from "./basket/BasketList";
import Alert from "./basket/Alert";
import {ShopContext} from "../context";

const Shop = () => {
    const {
        setGoods,
        loading,
        order,
        isBasketShow,
        alertName
    } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then(data => {
                setGoods(data.shop);
            })
    }, []);

    return (
        <main className="container content">
            <Cart
                quantity={order.length}
            />
            {loading ? <Preloader/> : <GoodsList/>}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert/>}
        </main>
    )
}

export default Shop;