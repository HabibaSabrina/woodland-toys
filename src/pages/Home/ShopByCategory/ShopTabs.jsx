import React from 'react';
import ShopTab from './ShopTab';

const ShopTabs = ({ uniqueSub, toydata }) => {
    const subDatas = toydata.filter(toy => toy.subCategory == uniqueSub)
    console.log(subDatas)
    return (
        <div className='grid md:grid-cols-2 gap-10'>
            {
                subDatas?.slice(0, 2).map(subData => <ShopTab key={subData._id} subData={subData}></ShopTab>)
            }
        </div>
    );
};

export default ShopTabs;