import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import SubHeader from "./SubHeader";

function Header() {
  return (
    <header className="bg-gray-200">
      <div className="flex items-center justify-between text-gray-400 h-10 text-sm uppercase px-6  border-[1px] border-b-gray-300">
        {/* contact info */}
        <div className="flex items-center font-medium gap-10 h-full">
          <div className="cursor-pointer hover:text-gray-600">
            PHONE: <span>+44 300 303 0266</span>
          </div>
          <div className="cursor-pointer hover:text-gray-600">
            EMAIL: <span>info@cleaver.com</span>
          </div>
        </div>

        {/* social media */}
        <div className="flex items-center h-full text-gray-300 gap-5">
          <div className="text-xs">FOLLOW US</div>
          <div className="flex items-center h-full  cursor-pointer">
            <div className="flex items-center border-l-[1px] border-gray-300 h-full px-4 hover:text-gray-600">
              <FaFacebookF />
            </div>
            <div className="flex items-center border-x-[1px] border-gray-300 h-full px-4 hover:text-gray-600">
              <FaInstagram />
            </div>
            <div className="flex items-center px-4 hover:text-gray-600">
              <RiTwitterXFill />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <SubHeader />
      </div>
    </header>
  );
}

export default Header;
