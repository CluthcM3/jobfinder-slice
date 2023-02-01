import React from "react";
import heroimg from "../assets/logo/heroimg.png";
import sponsor from "../assets/logo/sponspor.png";
import search from "../assets/logo/search.svg";
import map3pin from "../assets/logo/map-pin-3.svg";
import rectangle from "../assets/logo/Rectangle 51.svg";
function OneHero() {
  const menusearch = [
    {
      id: 1,
      name: "Company, Job Title...",
      img: search,
    },
    {
      id: 2,
      name: "City, State, or Country",
      img: map3pin,
    },
  ];
  return (
    <div className="max-w-[1560px] w-full mx-auto overflow-hidden">
      <div className="relative w-full h-[860px]  hidden md:block">
        <div className="absolute w-[634px] h-[216px] left-[160px] top-[72px] z-30">
          <div className="flex flex-col justify-between w-full h-full items-start gap-[24px">
            <div className="flex flex-row justify-center py-[12px] px-[24px] gap-[10px] w-[193px] h-[48px] bg-[#F6F6F6] rounded-full font-redhatregular">
              2886 open positions
            </div>
            <h1 className="w-[534px] h-[144px] font-redhatmedium text-[56px] leading-[72px] tracking-[1.1px]">
              Find your next exciting startup job
            </h1>
          </div>
        </div>
        <div className="absolute w-[488px] h-[96px] left-[160px] top-[312px]">
          <p className="font-redhatregular text-xl leading-8">
            Lorem ipsum dolor sit amet consectetur. Orci augue eu a et
            tincidunt. Fringilla tincidunt tempor euismod porttitor quis id ame.
          </p>
        </div>
        <div className="absolute lg:w-[832px] w-[532px] h-[104px] left-[168px]  top-[455px]   z-30 bg-[#E1F073] rounded-md" />
        <div className="absolute w-[532px] lg:w-[832px] h-[104px] left-[160px] top-[448px]   z-30">
          <div className="flex  items-center w-full h-full">
            <div className="flex flex-row items-center py-[40px] px-[32px] gap-3 w-full h-full border-[3px] border-black rounded-md bg-white">
              {menusearch.map(({ id, name, img }) => (
                <>
                  <img src={img} alt="" key={id} />
                  <input
                    key={id}
                    type="text"
                    name=""
                    id=""
                    className="outline-none w-[218px] h-[32px] font-redhatregular"
                    placeholder={name}
                  />

                  <div
                    className={`${
                      id == 1 ? "w-[2px] h-[48px] bg-[#EDEDEE]" : "hidden"
                    }`}
                  ></div>
                </>
              ))}
              <div className="hidden lg:flex flex-col justify-center items-center px-[20px] py-[12px] w-[200px] h-[104px] gap-[10px]">
                <div className="flex flex-row justify-center px-8 py-4 w-[160px] h-[64px] gap-[8px] bg-black">
                  <button className="text-white font-redhatbold text-xl ">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex justify-end items-center px-[20px] py-[12px] w-[552px] h-[104px] gap-[10px]">
            <div className="flex justify-center px-8 py-4 w-[160px] h-[64px] gap-[8px] bg-black">
              <button className="text-white font-redhatbold text-xl ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[792px] h-[776px] left-[728px] bg-blue-500 hidden xl:block">
          <img src={heroimg} className="object-cover w-full h-full" alt="" />
        </div>
      </div>
      <div className="max-w-full w-full h-full mx-auto flex items-center ">
        <div className="w-full md:hidden flex flex-row">
          <div className="lg:w-1/2 w-full lg:block  h-[776px]  md:pl-16">
            {/* kosong */}
            <div className="w-full h-[60px] lg:block hidden" />
            {/* kosong */}
            <div className="mx-3 mt-6 flex h-[556px]  items-start flex-col ">
              <div className=" max-w-[175px] py-2 px-4 bg-[#f6f6f6] flex justify-center items-center rounded-full">
                <p className="text-sm font-redhatregular">
                  2885 Open Positions
                </p>
              </div>
              <div className="flex justify-between flex-col h-[40%] xs:h-[44%] tx:h-[36%] xs2:h-[40%] md:h-[35%] lg:h-[40%] mt-6">
                <div className=" h-full max-w-[634px]">
                  <p className="text-[40px] font-redhatbold">
                    Find your next exciting startup job
                  </p>
                </div>
                <div className=" h-full mt-3 w-full xs2:w-[80%]">
                  <p className="font-redhatregular">
                    Lorem ipsum dolor sit amet consectetur. Orci augue eu a et
                    tincidunt. Fringilla tincidunt tempor euismod porttitor quis
                    id ame.
                  </p>
                </div>
              </div>
              <div className="max-w-[832px] mt-16 tx:mt-4 xs:mt-8 xs2:mt-0">
                <div className="grid grid-cols-1 w-full">
                  <div className="flex items-center  w-[315px] tx:w-[390px] xs:w-[340px] xs2:w-[390px] md:w-[480px] h-full ">
                    <div className="w-[90%] xs:w-full relative">
                      {menusearch.map(({ id, name, img }) => (
                        <div className="relative">
                          <div className="flex h-[60px] w-full mt-4 ">
                            <div className="flex items-center flex-row border-[3px] border-black bg-white rounded-md w-full h-full z-10">
                              <div className="w-[20%] md:w-[15%] pl-3">
                                <img src={img} alt="" />
                              </div>
                              <div className="w-[80%]">
                                <input
                                  type="text"
                                  placeholder={name}
                                  className="outline-none h-[32px] w-full text-sm font-redhatregular"
                                />
                              </div>
                            </div>
                            <div className="absolute w-full h-full bg-[#e1f073] z-0 -right-1 rounded-md top-1"></div>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-end lg:justify-start my-4">
                        <button className="bg-black text-white font-redhatmedium px-8 py-3 z-10">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block w-1/2 hidden">
            <div className="w-full ">
              <img
                src={heroimg}
                className="object-cover w-full h-[776px] opacity-80 lg:opacity-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneHero;
