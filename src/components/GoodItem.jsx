import React from 'react';

const GoodItem = (props) => {

    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price,
        displayAssets,
        addToBasket
    } = props;

    const {regularPrice} = price;

    const handleClick = () => {
        addToBasket({
            id,
            name,
            price: regularPrice
        })
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn blue darken-4" onClick={handleClick}>Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{regularPrice}₽</span>
            </div>
        </div>
    );
};

export default GoodItem;