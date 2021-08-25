import React from 'react';

const GoodItem = (props) => {

    const {
        mainId : id,
        displayName: name,
        displayDescription: description,
        price,
        displayAssets
    } = props;

    console.log('GoodItem ', props);

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price.regularPrice}₽</span>
            </div>
        </div>
    );
};

export default GoodItem;