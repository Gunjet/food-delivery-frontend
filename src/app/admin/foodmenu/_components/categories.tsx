
type CategoryType = {
  categoryName: string;
  _id: string;
};

type CategoriesProps = {
  categories: CategoryType[];
  onAddCategory: () => void; 
};

export default function Categories({ categories, onAddCategory}: CategoriesProps) {
  return (
    <div className="mt-20">
      <div className='w-[78%] rounded-xl bg-white p-5 mr-auto ml-auto'>
        <p className="text-[20px] font-semibold">Dishes category</p>
        <div className="flex gap-3 flex-wrap mt-3">
          {categories.map((category) => (
            <div
              key={category._id}
              className="rounded-3xl border-[#E4E4E7] px-3 py-2 border-[1px] text-[14px] flex gap-2 cursor-pointer hover:bg-gray-100"
            >
              {category.categoryName}
              <div className="rounded-xl text-white bg-black px-3">6</div>
            </div>
          ))}
          <button
            className="bg-[#EF4444] w-[36px] h-[36px] rounded-full text-white text-[20px] flex justify-center items-center"
            onClick={onAddCategory}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
