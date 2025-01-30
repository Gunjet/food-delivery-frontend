import "./style.css";

export default function Footer(){
    return(
        <div className='w-full bg-black h-[755px] flex flex-col bottom-0 right-0 left-0 relative'>
            <div className="bg-[#EF4444] text-[30px] w-full p-5 mt-20 text-white font-semibold absolute">
            <div className=" text-animation-infinite-scroll flex gap-[150px]">
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>                  
             </div>
            </div>

            <div className="w-[60%] h-[228px] my-auto mx-auto flex">

             <div className=" flex flex-col w-[88px] h-[93px] items-center ">
              <img src="/Logo.png" className="w-[40px] h-[40px]"></img>
               <div className="flex">
                <p className="text-[18px] font-semibold text-white">Nom</p>
                <p className="text-[18px] font-semibold text-[#EF4444]">Nom</p>
               </div>
               <p className="text-white text-[12px]">Swift delivery</p>
             </div>

             <div className="w-[788px] h-[228px] ml-[20%] flex flex-col items-center relative">

                <div className="absolute left-0 w-[122px] h-[142px] flex flex-col justify-between">
                    <p className="text-[#71717A]">NOMNOM</p>
                    <p className="text-white">Home</p>
                    <p className="text-white">Contact us</p>
                    <p className="text-white">Delivery zone</p>
                </div>

                <div className="w-[320px] h-[228px] flex justify-between">
                  <div className="flex flex-col justify-between w-[132px] h-[228px]">
                    <p className="text-[#71717A]">MENU</p>
                    <p className="text-white">Appetizers</p>
                    <p className="text-white">Salads</p>
                    <p className="text-white">Pizzas</p>
                    <p className="text-white">Main dishes</p>
                    <p className="text-white">Desserts</p>
                  </div>
                  <div className="flex flex-col justify-between w-[132px] h-[228px]">
                    <p>MENU</p>
                    <p className="text-white">Side dish </p>
                    <p className="text-white">Brunch</p>
                    <p className="text-white">Desserts</p>
                    <p className="text-white">Beverages</p>
                    <p className="text-white">Fish & Sea foods</p>
                  </div>
                </div>

                <div className="absolute right-0 w-[122px] h-[81px] flex flex-col justify-between">
                    <p className="text-[#71717A]">FOLLOW US</p>
                    <div className="flex gap-4"> 
                      <img className="h-[27px] w-[27px]" src='/Facebook.png'/>
                      <img className="h-[27px] w-[27px]" src='/Instagram.png'/>  
                    </div>
                </div>
             </div>
            </div>

            <div className="w-[60%] h-[84px] border-[#71717A] border-t-[1px] absolute rounded-t-none flex items-center gap-20 text-[#71717A] right-1/2 transform -translate-x-1/2 left-1/2 bottom-[70px] text-sm">
                <p>Copy right 2024 © Nomnom LLC</p>
                <p>Privacy policy</p>
                <p>Terms and conditoin</p>
                <p>Cookie policy</p>
            </div>
        </div>
    )
}

