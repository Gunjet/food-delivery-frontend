import { IoCloseOutline } from "react-icons/io5";
  
type AddNewCategoryProps = {
    onClose: () => void;
    onAddAddress: (categoryName: string) => void;
  };

export default function DeliveryAddress(){
    return(
        <div className="fixed bg-[#00000011] w-screen h-full flex justify-center items-center">
          <div className="bg-white rounded-lg p-5">
            <div className="flex gap-[250px] items-center">
              <p className="text-[18px] font-semibold">Add new category</p>
              <div
                className="rounded-full bg-[#F4F4F5] p-3 cursor-pointer"
                // onClick={onClose}
              >
                <IoCloseOutline className="text-[20px]" />
              </div>
            </div>
    
            {/* <form onSubmit={handleSubmit} className="mt-8"> */}
            <form className="mt-8">
              <p className="text-[14px]">Category name</p>
              <input
                type="text"
                className="rounded-md text-[#71717A] border-[#E4E4E7] border-[1px] px-3 pr-[270px] py-2 text-[14px] mt-2"
                // value={categoryName}
                // onChange={(e) => setCategoryName(e.target.value)}
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
    )
}