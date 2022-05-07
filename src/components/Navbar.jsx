import React,{useState}from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const [nav,SetNav] = useState(false);
    const handleNav = ()=>{
        SetNav(!nav)
    }
    const handleClose = ()=>{
      SetNav(nav)
    }
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
          <li className="cursor-pointer	"><Link to="home" smooth={true}   duration={500}>Home</Link></li>
          <li className="cursor-pointer	"><Link to="about" smooth={true}  offset={-100} duration={500}>About</Link></li>
          <li className="cursor-pointer	"><Link to="support" smooth={true}   duration={500}>Support</Link></li>
          <li className="cursor-pointer	"><Link to="platforms" smooth={true}  offset={-100} duration={500}>Platforms</Link></li>
          <li className="cursor-pointer	"><Link to="pricing" smooth={true}  duration={500}>Pricing</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleNav}>
            {!nav? <MenuIcon className="w-7 mr-2" />:<XIcon className="w-7"/>}
        </div>
      </div>
      <ul className={!nav?'hidden':'absolute bg-zinc-200 w-full px-6'}>
      <li className="cursor-pointer	"><Link to="home" smooth={true}   duration={500}>Home</Link></li>
          <li className="cursor-pointer	border-b-2 border-zinc-300 w-full"><Link to="about" smooth={true}  offset={-100} duration={500} onClick={handleClose}>About</Link></li>
          <li className="cursor-pointer	border-b-2 border-zinc-300 w-full"><Link to="support" smooth={true}   duration={500} onClick={handleClose}>Support</Link></li>
          <li className="cursor-pointer	border-b-2 border-zinc-300 w-full"><Link to="platforms" smooth={true}  offset={-100} duration={500}  onClick={handleClose}>Platforms</Link></li>
          <li className="cursor-pointer	border-b-2 border-zinc-300 w-full"><Link to="pricing" smooth={true}  duration={500} onClick={handleClose}>Pricing</Link></li>
        <div className="flex flex-col my-4">
        <button className="bg-transparent text-indigo-300 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
