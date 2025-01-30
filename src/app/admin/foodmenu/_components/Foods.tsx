import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { AddNewFood } from "./Modals";
// import { useUser } from "@clerk/nextjs";

type CategoryType = {
  categoryName: string;
  _id: string;
};

type CategoriesProps = {
  categories: CategoryType[];
  onAddCategory: () => void; 
};
export const Foods = ({ categories}: CategoriesProps) => {

  const [foods, setFoods] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { user, isLoaded } = useUser();

  // if (!isLoaded){
  //   return 
  // }

  // const isAdmin = user?.publicMetadata.role === 'admin'

  const addFood = async (foodName: string, foodPrice: string, ingredients: string) => {
    const response = await fetch('http://localhost:4001/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foodName, foodPrice, ingredients }),
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
    <>

    {categories.map((category) => (
    <div className="w-[78%] rounded-xl bg-white p-5 mt-10 mr-auto ml-auto flex-wrap flex">
      {/* <div>{user.fullName}</div>
      { isAdmin ? <div>foods</div> : <div>forbidden</div>} */}

        <p key={category._id} className="font-semibold text-[20px] mb-5">
          {category.categoryName}
      </p>

 {/* <p className="font-semibold text-[20px] mb-5">
   Category*
 </p> */}
        <div className="flex flex-wrap gap-5">
        <div className='rounded-2xl bg-white border-dashed border-[#EF4444] border-[1px] w-[270px] flex flex-col gap-5 justify-center items-center'>  
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#EF4444] w-[36px] h-[36px] rounded-full text-white text-[20px] flex justify-center items-center"
          >
            +
          </button>
          <p>Add new Dish to</p>
        </div>
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      {isModalOpen && (
        <AddNewFood
          onClose={() => setIsModalOpen(false)}
          onAddFood={addFood}
        />
      )}
    </div>

))}
    </>
  );

};