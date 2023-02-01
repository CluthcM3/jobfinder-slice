import { React, useState } from "react";
import logoNav from "../assets/logo/Logo.png";
import menu from "../assets/logo/menu.svg";
import { HiMenuAlt2 } from "react-icons/hi";
function OneHeader() {
  const [show, setShow] = useState(false);
  const menunav = [
    {
      id: 1,
      name: "For Investor",
      link: "#",
    },
    {
      id: 2,
      name: "For Startup",
      link: "#",
    },
    {
      id: 3,
      name: "Find Jobs",
      link: "#",
    },
    {
      id: 4,
      name: "Browse Startups",
      link: "#",
    },
    {
      id: 5,
      name: "Seek Funding",
      link: "#",
    },
  ];
  return (
    <div className="relative ">
      <hr className="fixed md:absolute top-[5.2rem] w-full border-t border-black z-20 " />
      <div className="max-w-[1440px] w-full  mx-auto overflow-hidden ">
        <div className="md:static fixed w-full bg-white md:bg-white">
          <div className="max-w-full w-full] h-[84px]  mx-auto flex items-center md:px-6 px-3 xl:px-0  ">
            <div className="lg:w-[70%] w-full h-full  flex items-center  ">
              <div className="md:mr-12 lite:mr-0 ">
                <img
                  src={logoNav}
                  className="h-[32px] w-[124px] object-contain"
                  alt=""
                />
              </div>
              <div className="w-full h-full md:h-[40px] lite:h-[40px] md:flex items-center xs2:justify-end hidden">
                <div className="flex items-center md:justify-end xl:justify-start w-full h-full">
                  <ul className="flex items-center md:gap-8 lg:gap-4">
                    {menunav.map(({ id, name, link }) => (
                      <li key={id} className="text-sm font-redhatregular">
                        <a href={link}>{name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full flex justify-end md:hidden ">
                <HiMenuAlt2
                  className="w-8 h-8 rotate-180"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              </div>
            </div>
            <div className="md:w-[30%] h-full lg:flex hidden ">
              <div className="flex items-center justify-end w-full h-full">
                <button className="border border-gray-400 py-3 px-6 font-redhatbold">
                  Log in
                </button>
                <button className="ml-4 bg-black text-white py-3 px-6 font-redhatbold">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* className={`fixed inset-0 w-[calc(100%-4.5rem)] md:mt-0 mt-20 z-40 ${
          open ? "translate-x-0" : "translate-x-[-100%]"
        } bg-primary shadow-xl transition duration-300  lg:static lg:w-auto md:translate-x-[-100%] lg:border-r-0 lg:shadow-none`} */}
        <div
          className={`h-40 lg:h-0 w-full bg-blue-400 fixed shadow-xl z-40 mt-[84px]  ${
            show ? "translate-x-0" : "translate-x-[-100%] inset-x-0"
          } transition duration-300  lg:static lg:w-auto md:translate-x-[-100%] lg:border-none lg:shadow-none`}
        >
          <div className="w-full flex justify-center">
            <ul>
              {menunav.map(({ id, name, link }) => (
                <li
                  key={id}
                  className="text-sm text-center font-redhatregular mt-2 group "
                >
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneHeader;
