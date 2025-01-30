import { MdOutlineModeEdit } from "react-icons/md"
import { useEffect, useState } from "react";
import { EditDishesInfo } from "./Modals";

interface Food {
    image?: string;
    foodName?: string;
    ingredients?: string;
    price?: string;
}
  
  interface FoodCardProps {
    food: Food;
  }
  const FoodCard = ({ food }: FoodCardProps) => {
      const [foods, setFoods] = useState<any[]>([]);
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const addFood = async (foodName: string, category: string, foodPrice: string, ingredients: string ) => {
        const response = await fetch('http://localhost:4001/food', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ foodName, foodPrice, ingredients, category }),
        });
          const data = await response.json();
          setFoods([...foods, data]); 
          setIsModalOpen(false); 
      };
    
      useEffect(() => {
        const fetchFoods = async () => {
          const response = await fetch('http://localhost:4001/food');
          const data = await response.json();
          setFoods(data);
        };
        fetchFoods();
      }, []);

    return (
        <div className='p-4 rounded-2xl bg-white border w-[270px] '>  
        <img src={food?.image} className="w-[238px] h-[129px] object-cover rounded-xl relative"/>
        <button 
           onClick={() => setIsModalOpen(true)}
           className="rounded-full w-[44px] h-[44px] bg-white absolute flex justify-center items-center text-red-500 mt-[-60px] ml-[170px]"
           >
           <MdOutlineModeEdit/>
        </button>
        <div className="flex justify-between mt-5">
           <p className="text-red-500 text-[14px]">{food?.foodName} </p>
           <p className="text-[12px] text-black">${food?.price}</p>
        </div>
        <p className="text-[12px] mt-2 text-black">{food?.ingredients}</p>
        {isModalOpen && (
          <EditDishesInfo
            onClose={() => setIsModalOpen(false)}
            onEditDishesInfo={addFood}
          />
         )}
    </div>
    )
}

export default FoodCard;

