import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CoverImg from '../../Routes/Shared/Cover/CoverImg';
import orderCover from '../../assets/shop/order.jpg';
import UseMenu from '../../hooks/UseMenu';
import OrderTabPannel from './OrderTabPannel';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <CoverImg bgImg={orderCover} title={"Our Shop"}></CoverImg>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabPannel items={salad}></OrderTabPannel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPannel items={pizza}></OrderTabPannel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPannel items={soup}></OrderTabPannel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPannel items={dessert}></OrderTabPannel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPannel items={drinks}></OrderTabPannel>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;