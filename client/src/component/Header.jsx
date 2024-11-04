import React from 'react';
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link ,useLocation} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


export default function Header() {
  const path=useLocation().pathname;
  return (
    <Navbar className="border-b-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
      <Link to="/" className="self-center flex items-center space-x-1">
        <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-lg text-black font-sans">
          Cp
        </span>
        <span>Pedia</span>
      </Link>

      {/* Form: Hidden on small screens, visible on large screens */}
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
      
          <TextInput type="text" placeholder=" Search..." className="pr-10" />
          <AiOutlineSearch className=" text-gray-500" />
        
      </form>



      {/* Button: Visible on small screens, hidden on large screens */}
      <Button className="w-12 h-10 block lg:hidden" gradientDuoTone="purpleToBlue" pill>
        <AiOutlineSearch />
      </Button>



      <Navbar.Collapse>
          <Navbar.Link active={path==="/"} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>

          <Navbar.Link active={path==="/about"} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>

          <Navbar.Link active={path==="/projects"} as={'div'}>
            <Link to='/Projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 " color="gray" pill>
          <FaMoon />
        </Button>

        <Link to="/signin">
          <Button  gradientDuoTone='purpleToBlue' pill outline>
            Sign In
          </Button>
        </Link>
        
      </div>
      <Navbar.Toggle/>

    </Navbar>
  );
}










