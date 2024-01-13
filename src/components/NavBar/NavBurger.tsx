type NavBurgerProps = {
  links: Link[];
  isOpen: boolean;
  handleScrollTo: (x: string) => void;
};

function NavBurger({ links, isOpen, handleScrollTo }: NavBurgerProps ) {
  return (
    <ul className={!isOpen ? "hidden" : "md:hidden absolute bg-zinc-200 w-full px-8"}>
      {links.map( link => (
        <li 
          className="border-b-2 border-zinc-300 w-full" 
          onClick={() => handleScrollTo(link.href)}
        >
          {link.text}
        </li>
      ))}

      <div className="flex flex-col my-4">
        <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
        <button className="px-8 py-3">Sign Up</button>
      </div>
    </ul>
  );
}

export default NavBurger;