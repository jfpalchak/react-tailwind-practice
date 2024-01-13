import { useState } from "react";

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
            <li onClick={() => handleScrollTo("home")}>Home</li>
            <li onClick={() => handleScrollTo("about")}>About</li>
            <li onClick={() => handleScrollTo("support")}>Support</li>
            <li onClick={() => handleScrollTo("platforms")}>Platforms</li>
            <li onClick={() => handleScrollTo("pricing")}>Pricing</li>
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

      <ul className={!navOpen ? "hidden" : "md:hidden absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full" onClick={() => handleScrollTo("home")}>Home</li>
        <li className="border-b-2 border-zinc-300 w-full" onClick={() => handleScrollTo("about")}>About</li>
        <li className="border-b-2 border-zinc-300 w-full" onClick={() => handleScrollTo("support")}>Support</li>
        <li className="border-b-2 border-zinc-300 w-full" onClick={() => handleScrollTo("platforms")}>Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full" onClick={() => handleScrollTo("pricing")}>Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>

    </header>
  )
}

export default NavBar;