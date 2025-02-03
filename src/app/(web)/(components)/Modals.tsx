import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface AddressModalProps {
  onClose: () => void; 
  onSave: (address: string) => void; 
}

export const AddressModal = ({ onClose, onSave }: AddressModalProps) => {
  const [address, setAddress] = useState<string>("");

  const handleSave = () => {
    onSave(address); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 w-screen h-full flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex gap-[250px] items-center mb-5">
        <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
        <div
            className="rounded-full bg-[#F4F4F5] p-3 cursor-pointer" onClick={onClose}
          >
            <IoCloseOutline className="text-[20px] w-[20px] h-[20px]"/>
          </div>
        </div>

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Please provide specific address details such as building number, entrance, and apartment number"
          className="w-full px-3 py-2 border rounded-md mb-4"
        />
        <div className="flex justify-end gap-3 mt-10">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border rounded-md text-black"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#18181B] text-white rounded-md"
          >
            Deliver here
          </button>
        </div>
      </div>
    </div>
  );
};