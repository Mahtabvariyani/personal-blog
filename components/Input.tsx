"use client";
import { IoSearchCircleSharp } from "react-icons/io5";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        className="w-full  rounded-lg p-4 outline-none text-black"
        placeholder="Tehran..."
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-55px] text-red-400 cursor-pointer">
        <IoSearchCircleSharp size={40}  />
      </div>
    </form>
  );
};

export default Input;
