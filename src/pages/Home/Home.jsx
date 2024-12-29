import React from 'react';
import Outline from './Outline';
import PopularMenu from '../PopularMenu/PopularMenu';
import Banner from '../Banner/Banner';
import BannerCallUs from '../Banner/BannerCallUs';
import Featured from '../Featured/Featured';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outline></Outline>
            <PopularMenu></PopularMenu>
            <BannerCallUs></BannerCallUs>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;