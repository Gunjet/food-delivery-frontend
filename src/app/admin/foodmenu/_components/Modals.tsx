import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type AddNewCategoryProps = {
  onClose: () => void;
  onAddCategory: (categoryName: string) => void;
};

export default function AddNewCategory({ onClose, onAddCategory }: AddNewCategoryProps) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCategory(categoryName);
  };

  return (
    <div className="fixed bg-[#00000011] w-screen h-full flex justify-center items-center">
      <div className="bg-white rounded-lg p-5">
        <div className="flex gap-[250px] items-center">
          <p className="text-[18px] font-semibold">Add new category</p>
          <div
            className="rounded-full bg-[#F4F4F5] p-3 cursor-pointer"
            onClick={onClose}
          >
            <IoCloseOutline className="text-[20px]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <p className="text-[14px]">Category name</p>
          <input
            type="text"
            className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 pr-[270px] py-2 text-[14px] mt-2"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Type category name..."
          />
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-black rounded-md text-white px-4 py-2 text-[14px]"
            >
              Add category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type AddNewFoodProps = {
  onClose: () => void;
  onAddFood: (foodName: string, foodPrice: string, ingredients: string) => void;
};

export function AddNewFood({ onClose, onAddFood }: AddNewFoodProps) {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      onAddFood(foodName, foodPrice, ingredients); 
      setFoodName("");
      setFoodPrice(""); 
      setIngredients("");
  };

  return (
    <div className="fixed inset-0 bg-[#00000011] flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 ">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-semibold">Add New Dish</p>
          <div
            className="rounded-full bg-[#F4F4F5] p-3 cursor-pointer"
            onClick={onClose}
          >
            <IoCloseOutline className="text-[20px]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex gap-4">
            <div>
              <p className="text-[14px]">Food name</p>
              <input
                type="text"
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                placeholder="Type food name..."
              />
            </div>

            <div>
              <p className="text-[14px]">Food price</p>
              <input
                type="text"
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                value={foodPrice}
                onChange={(e) => setFoodPrice(e.target.value)}
                placeholder="Enter price..."
              />
            </div>
          </div>

            <p className="text-[14px]">Ingredients</p>
              <input
                type="text"
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="List ingredients..."
             />

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-black rounded-md text-white px-4 py-2 text-[14px]"
            >
              Add Dish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type EditDishesInfoProps = {
  onClose: () => void;
  onEditDishesInfo: (foodName: string, category: string, foodPrice: string, ingredients: string) => void;
};

export function EditDishesInfo({ onClose, onEditDishesInfo}: EditDishesInfoProps){
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      onEditDishesInfo(foodName, foodPrice, ingredients, category); 
      setFoodName("");
      setFoodPrice(""); 
      setIngredients("");
      setCategory("")
  };
  return(
    <>
     <div className="fixed inset-0 bg-[#00000011] flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 ">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-semibold">Dishes Info</p>
          <div
            className="rounded-full bg-[#F4F4F5] p-3 cursor-pointer"
            onClick={onClose}
          >
            <IoCloseOutline className="text-[20px]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex gap-20">
              <p className="text-[14px]">Dish name</p>
              <input
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                placeholder="Type food name..."
                onChange={(e) => setFoodName(e.target.value)}
              />
            </div>

            <div className="flex gap-20">
              <p className="text-[14px]">Dish category</p>
              <input
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                placeholder="Type food name..."
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="flex gap-20">
              <p className="text-[14px]">Food price</p>
              <input
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                placeholder="Enter price..."
                onChange={(e) => setFoodPrice(e.target.value)}
              />
            </div>

            <div className="flex">
              <p className="text-[14px]">Ingredients</p>
              <input
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 py-2 text-[14px] mt-2 w-full"
                placeholder="List ingredients..."
                onChange={(e) => setIngredients(e.target.value)}
               />
            </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-black rounded-md text-white px-4 py-2 text-[14px]"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}