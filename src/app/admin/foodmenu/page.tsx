'use client'

import { useState, useEffect } from "react";
import Categories from "./_components/categories";
import AddNewCategory from "./_components/Modals";
import { Foods } from "./_components/Foods";
// import { useAuthFetch } from "./_components/usefetchData";

type CategoryType = {
  categoryName: string;
  _id: string;
};

type CategoriesProps = {
  categories: CategoryType[];
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryAdded, setIsCategoryAdded] = useState(false);
  // const FoodMenu = useAuthFetch("FoodMenu")

  const addCategory = async (categoryName: string) => {
    const response = await fetch('http://localhost:4001/food-category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ categoryName }),
    });

    if (response.ok) {
      const data = await response.json();
      setCategories([...categories, data]);
      setIsCategoryAdded(true); 
      setIsModalOpen(false); 

      setTimeout(() => {
        setIsCategoryAdded(false);
      }, 3000);
    }
  };

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:4001/food-category');
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div>
        <Categories
          categories={categories}
          onAddCategory={() => setIsModalOpen(true)}
        />
        <Foods categories={categories} onAddCategory={function (): void {} }/>
      </div>
      {isModalOpen && (
        <AddNewCategory
          onClose={() => setIsModalOpen(false)}
          onAddCategory={addCategory}
        />
      )}
      {isCategoryAdded && (
        <div className="fixed w-full h-full flex justify-center items-center z-50">
          <div className="bg-[#18181B] p-4 rounded-md">
            <p className="text-lg font-semibold text-white">New Category is being added to the menu</p>
          </div>
        </div>
      )}
    </>
  );
}
