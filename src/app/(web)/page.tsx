'use client'

import Header from "./(components)/Header"
import Footer from "./(components)/Footer"
import { useEffect, useState } from "react";
import FoodCard from "../admin/foodmenu/_components/FoodCard";
// import Categories from "../admin/foodmenu/_components/Categories";

type CategoryType = {
    categoryName: string;
    _id: string;
  };
  
   type CategoriesProps = {
    categories: CategoryType[];
  };

export default function Home(){
    const [foods, setFoods] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const fetchCategories = async () => {
      const response = await fetch('http://localhost:4001/food-category');
      const data = await response.json();
      setCategories(data);
    };
  
    useEffect(() => {
      fetchCategories();
    }, []);

    useEffect(() => {
      const fetchFoods = async () => {
        const response = await fetch('http://localhost:4001/food');
        const data = await response.json();
        setFoods(data);
      };
      fetchFoods();
    }, []);
    return(
        <body style={{ backgroundColor: '#404040'}}>
        <Header/>
        <img src='/BG.png'/>
        <section className="w-full px-[20%] py-7 flex-wrap gap-3 text-white flex flex-col items-center" >
        {/* <Categories
          categories={categories}
          onAddCategory={() => setIsModalOpen(true)}
        /> */}
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

        {/* <div className="flex flex-wrap gap-5">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div> */}

    {categories.map((category) => ( 
    <div className="flex flex-wrap gap-5">
       <p key={category._id} className="font-semibold text-[20px] mb-5">
          {category.categoryName}
       </p>

        <div className="flex flex-wrap gap-5">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
    </div>

))}
        </section>
        <Footer/>
        </body>
    )
}
  