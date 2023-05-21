import React from 'react';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;