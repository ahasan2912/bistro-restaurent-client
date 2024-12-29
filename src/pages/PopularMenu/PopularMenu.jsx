import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItemCard from '../../Routes/Shared/MenuItemCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            });
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"From our Menu"}
                subHeading={"Popular Items"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className='my-5 text-center'>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
        </section>
    );
};

export default PopularMenu;