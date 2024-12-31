import React from 'react';
import CoverImg from '../../Routes/Shared/Cover/CoverImg';
import MenuItemCard from '../../Routes/Shared/MenuItemCard';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, bgImg }) => {
    return (
        <div className='pt-10'>
            {
                title && <CoverImg bgImg={bgImg} title={title}></CoverImg>
            }
            <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map(item => <MenuItemCard
                        key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className='my-5 text-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 uppercase">Order your favourite food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;