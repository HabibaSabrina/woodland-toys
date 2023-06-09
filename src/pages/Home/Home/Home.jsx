import React from 'react';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import ParentsTips from '../ParentsTips/ParentsTips';
import ProtectAnimal from '../ProtectAnimal/ProtectAnimal';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ParentsTips></ParentsTips>
            <ShopByCategory></ShopByCategory>
            <ProtectAnimal></ProtectAnimal>
        </div>
    );
};

export default Home;