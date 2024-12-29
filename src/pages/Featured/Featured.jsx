import React from 'react';
import featuredImg from '../../assets/home/featured.jpg';
import SectionTitle from '../../components/SectionTitle';
import './Features.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-60 bg-slate-500'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-2'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veniam odio ab id quis quod delectus excepturi. Consequuntur numquam nesciunt cupiditate iste nam eveniet sit temporibus. Fugiat voluptatum doloribus odio?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;