import { MdOutlineModeEdit } from "react-icons/md"
import { useEffect, useState } from "react";
import { EditDishesInfo } from "./Modals";

interface Food {
  image?: string;
  foodName?: string;
  ingredients?: string;
  price?: string;
}

export interface FoodCardProps {
  food: Food;
  display: 'none' | 'block'; 
}

const FoodCard = ({ food, display }: FoodCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addFood = async (foodName: string, category: string, foodPrice: string, ingredients: string) => {
    const response = await fetch('http://localhost:4001/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foodName, foodPrice, ingredients, category }),
    });
    const data = await response.json();
    setIsModalOpen(false); 
  };

  return (
    <div className="p-4 rounded-2xl bg-white border w-[270px]">  
      <img 
        src={food?.image} 
        alt={food?.foodName}
        className="w-[238px] h-[129px] object-cover rounded-xl relative" 
      />

      <button 
        onClick={() => setIsModalOpen(true)}
        className={`${
          display === 'block' ? 'block' : 'hidden'
        } rounded-full w-[44px] h-[44px] bg-white absolute flex justify-center items-center text-red-500 mt-[-60px] ml-[170px]`}
      >
        <MdOutlineModeEdit />
      </button>

      <div className="flex justify-between mt-5">
        <p className="text-red-500 text-[14px]">{food?.foodName} </p>
        <p className="text-[12px] text-black">${food?.price}</p>
      </div>

      <p className="text-[12px] mt-2 text-black">{food?.ingredients}</p>

      {isModalOpen && (
        <EditDishesInfo
          food={food}  
          onClose={() => setIsModalOpen(false)}
          onEditDishesInfo={addFood}
        />
      )}
    </div>
  );
};

export default FoodCard;

