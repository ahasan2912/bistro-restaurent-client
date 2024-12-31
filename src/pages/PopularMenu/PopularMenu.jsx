
import SectionTitle from '../../components/SectionTitle';
import MenuItemCard from '../../Routes/Shared/MenuItemCard';
import UseMenu from '../../hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"From our Menu"}
                subHeading={"Popular Items"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className='my-5 text-center'>
                <Link to='/order'>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;