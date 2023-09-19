import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
  ];

  return (
    <nav className="bg-yellow-200 text-black lg:w-full ">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open === true ? (
          <RxCross2></RxCross2>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute duration-1000 bg-yellow-200 md:static lg:w-full md:w-full p-6 ${
          open ? "top-4" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
