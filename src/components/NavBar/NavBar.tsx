import { useState } from "react";
import { navLinks } from "../../data/data";
import NavBurger from "./NavBurger";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavBar () {

  const [navOpen, setNavOpen] = useState(false);

  const handleClick = (): void => setNavOpen(!navOpen);
  
  const handleScrollTo = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setNavOpen(false);
    }
  };

  return (
    <header className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <nav className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>

          <ul className="hidden md:flex">
            {navLinks.map( link => (
              <li onClick={() => handleScrollTo(link.href)}>{link.text}</li>
            ))}
          </ul>
          
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4 cursor-pointer" onClick={handleClick}>
          {!navOpen ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </nav>

      <NavBurger 
        links={navLinks} 
        isOpen={navOpen} 
        handleScrollTo={handleScrollTo} 
      />

    </header>
  )
}

export default NavBar;