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

export const Foods = ({ categories }: CategoriesProps) => {
  const [foods, setFoods] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { user, isLoaded } = useUser();

  // if (!isLoaded){
  //   return 
  // }

  // const isAdmin = user?.publicMetadata.role === 'admin'

  const addFood = async (foodName: string, foodPrice: string, ingredients: string, categoryId: string) => {
    const response = await fetch('http://localhost:4001/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foodName, foodPrice, ingredients, category: categoryId }),
    });
    const data = await response.json();
    setFoods([...foods, data]);
    setIsModalOpen(false);
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category._id} className="w-[78%] rounded-xl bg-white p-5 mt-10 mr-auto ml-auto flex-wrap flex">
          {/* Admin section */}
          {/* <div>{user.fullName}</div>
          {isAdmin ? <div>foods</div> : <div>forbidden</div>} */}

          <p className="font-semibold text-[20px] mb-5">{category.categoryName}</p>

          <div className="flex flex-wrap gap-5">

            <div className="rounded-2xl bg-white border-dashed border-[#EF4444] border-[1px] w-[270px] flex flex-col gap-5 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#EF4444] w-[36px] h-[36px] rounded-full text-white text-[20px] flex justify-center items-center"
              >
                +
              </button>
              <div className="flex items-center flex-col">
                Add new Dish to
                <p>{category.categoryName}</p>
              </div>
            </div>

            {foods
              .filter((food) => food.category === category._id) 
              .map((filteredFood) => (
                <FoodCard key={filteredFood._id} food={filteredFood} />
              ))}
          </div>

          {isModalOpen && (
            <AddNewFood
          categoryId={selectedCategory || ""}
          onClose={() => setIsModalOpen(false)}
          onAddFood={addFood}
        />
      )}
    </div>
      ))}
    </>
  );
};
