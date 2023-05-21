import React from 'react';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import ParentsTips from '../ParentsTips/ParentsTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ParentsTips></ParentsTips>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;