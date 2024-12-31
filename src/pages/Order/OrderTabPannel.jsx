import FoodCard from "../../Routes/Shared/FoodCard";

const OrderTabPannel = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 my-10'>
            {
                items.map(item =><FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabPannel;