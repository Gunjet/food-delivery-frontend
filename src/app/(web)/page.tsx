'use client'

import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { useEffect, useState } from "react";
import FoodCard from "../admin/foodmenu/_components/FoodCard";

type CategoryType = {
  categoryName: string;
  _id: string;
};

export default function Home() {
  const [foods, setFoods] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:4001/food-category');
    const data = await response.json();
    console.log('Categories:', data); 
    setCategories(data);
  };

  const fetchFoods = async () => {
    const response = await fetch('http://localhost:4001/food');
    const data = await response.json();
    console.log('Foods:', data); 
    setFoods(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
    fetchFoods();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: '#404040' }}>
      <Header />
      <img src='/BG.png' alt="Background Image" />
      <section className="w-full px-[20%] py-7 flex-wrap gap-3 text-white flex flex-col items-center">
 
        <div className='w-[100%] rounded-xl mr-auto ml-auto mb-10'>
          <p className="text-[30px] font-semibold mb-6">Categories</p>
          <div className="flex gap-3 flex-wrap mt-3">
            {categories.map((category) => (
              <div
                key={category._id}
                className="rounded-3xl bg-white text-black px-4 py-[3px] border-[1px] text-[18px] flex gap-2 cursor-pointer hover:bg-gray-100"
              >
                {category.categoryName}
              </div>
            ))}
          </div>
        </div>

     
        {categories.map((category) => (
          <div key={category._id} className="w-full mb-10">
            <p className="font-semibold text-[20px] mb-5">{category.categoryName}</p>

            <div className="flex flex-wrap gap-5">
          
              {foods
                .filter((food) => food.categoryId === category._id) 
                .map((food) => (
                  <FoodCard key={food._id} food={food} />
                ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
