// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { pages } from "@/constants";

export interface INavbar {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: INavbar) => {
  const flexBetween = "flex items-center fustify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            <div className={`${flexBetween} w-full`}>
              {/* navigate */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                {pages.map((page) => (
                  <Link
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
              {/* sign in */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button type="button">Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
