import { GrLocation } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";

export default function Header(){
    return(
        <header className='w-full h-[68px] bg-black px-[20%] flex items-center justify-between'>
        <div  className="w-[165px] h-[44px] flex gap-2">
            <img src="/Logo.png" className="w-[40px] h-[40px]"></img>
            <div className="flex flex-col">
            <div className="flex">
                <p className="text-[18px] font-semibold text-white">Nom</p>
                <p className="text-[18px] font-semibold text-[#EF4444]">Nom</p>
            </div>
            <p className="text-white text-[12px]">Swift delivery</p>
            </div>
        </div>

        <div className="flex gap-5">
          <div className="rounded-3xl bg-white px-4 py-2 text-[12px] flex items-center gap-2">
            <GrLocation className=' text-[#EF4444] w-[18px] h-[18px]'/>
            <p className=" text-[#EF4444]">Delivery address:</p>
            <p className="text-[#71717A] ">Add Location</p>
            <MdArrowForwardIos className="text-[#71717A] w-[15px] h-[15px]"/>
          </div>

          <div className="rounded-full bg-white flex items-center justify-center p-3">
             <img className='w-[16px] h-[16px]' src='/shopping-cart.png'/>
          </div>

          <div className="rounded-full bg-[#EF4444] flex items-center justify-center p-3">
             <img className='w-[16px] h-[16px]' src='/user.png'/>
          </div>
        </div>
        </header>
    )
}