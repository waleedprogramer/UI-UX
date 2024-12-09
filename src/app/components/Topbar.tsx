import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiMail, CiPhone } from "react-icons/ci";
import Link from "next/link";




const Topbar = () => {
  return (
    <div className={`bg-black1 text-white max-w-[1438px] h-[58px] text-[14px] flex justify-between hidden items-center lg:block bg-background`}>
      <div className="flex justify-around items-center px-2 w-full h-full">
        {/* Left Section: Contact */}
        <div className="flex items-center space-x-4 w-[416px] h-full">
          <div className="flex items-center space-x-1">
            <CiMail className="text-xl" />
            <span className="font-bold">michelle.rivera@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <CiPhone className="text-xl" />
            <span className="font-bold">(255) 555-0118</span>
          </div>
        </div>

        {/* Right Section: Language, Currency, Login, Wishlist, Cart */}
        <div className="flex items-center gap-6 w-[233px] h-full">
          {/* Language and Currency */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-color">
            <span className="font-bold">English </span>
            <IoIosArrowDown className="text-lg" />
             <span className="font-bold"> USD</span>
            <IoIosArrowDown className="text-lg" />
          </div>

          {/* Login */}
          <Link href='/login'>
          <div className="flex items-center gap-1 cursor-pointer hover:text-color"> 
            <span className="font-bold">Login</span>
            <FaUser className="text-lg" />
          </div>
          </Link>
          

          {/* Wishlist */}
          <Link href='/wishlist'> 
          <div className="flex items-center gap-1 cursor-pointer hover:text-color">
            
            <span className="font-bold">Wishlist</span>
            <FaHeart className="text-lg" />
          </div>
          </Link> 

          {/* Cart */}
          <Link href='/cart'>
          <div className="flex items-center gap-1 cursor-pointer hover:text-color">
            <FaShoppingCart className="text-lg" />
            
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Topbar;
