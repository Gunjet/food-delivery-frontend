'use client'

import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { OrderSheet } from "./OrderSheet";
import { AddressModal } from "./Modals";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressSave = (address: string) => {
    setDeliveryAddress(address);
  };

  return (
    <header className="w-full h-[68px] bg-black px-[20%] flex items-center justify-between">
      <div className="w-[165px] h-[44px] flex gap-2">
        <img src="/Logo.png" className="w-[40px] h-[40px]" />
        <div className="flex flex-col">
          <div className="flex">
            <p className="text-[18px] font-semibold text-white">Nom</p>
            <p className="text-[18px] font-semibold text-[#EF4444]">Nom</p>
          </div>
          <p className="text-white text-[12px]">Swift delivery</p>
        </div>
      </div>

      <div className="flex gap-5">
        <div
          className="rounded-3xl bg-white px-4 py-2 text-[12px] flex items-center gap-2 cursor-pointer"
          onClick={openModal}
        >
          <GrLocation className="text-[#EF4444] w-[18px] h-[18px]" />
          <p className="text-[#EF4444]">Delivery address:</p>
          <p className="text-[#71717A]">
            {deliveryAddress || "Add Location"}
          </p>
          <MdArrowForwardIos className="text-[#71717A] w-[15px] h-[15px]" />
        </div>

        <OrderSheet />

        <ClerkProvider>
          <SignedOut>
            <SignInButton>
              <div className="rounded-full bg-[#EF4444] flex items-center justify-center p-3 cursor-pointer">
                <img className="w-[16px] h-[16px]" src="/user.png" />
              </div>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex justify-center items-center cursor-pointer">
              <UserButton />
            </div>
          </SignedIn>
        </ClerkProvider>
      </div>

      {isModalOpen && (
        <AddressModal onClose={closeModal} onSave={handleAddressSave} />
      )}
    </header>
  );
}

