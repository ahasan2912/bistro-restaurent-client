import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverImg from '../../Routes/Shared/Cover/CoverImg';
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
import bgImage from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <CoverImg bgImg={bgImage} title={"Our Menu"}></CoverImg>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}>
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"Dessert"} bgImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"Pizza"} bgImg={pizzaImg}></MenuCategory>
            <MenuCategory items={pizza} title={"Pizza"} bgImg={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;