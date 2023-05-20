import React from 'react';

const ShopTab = ({subData}) => {
    const {toyPhoto, toyName, price, ratings} = subData
    return (
        <div>
            <img src={toyPhoto} alt="" />

        </div>
    );
};

export default ShopTab;