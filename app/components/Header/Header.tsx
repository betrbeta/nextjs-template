"use client";
import Link from "next/link";
// import { SendEmail } from "../SendEmail/SendEmail";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [usagePercentage, setUsagePercentage] = useState(11); // Initialize with a default value

  const handleClick = () => {
    setClick(!click);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const updateUsage = () => {
    const newUsagePercentage = Math.floor(Math.random() * 100) + 1;
    setUsagePercentage(newUsagePercentage);
  };

  useEffect(() => {
    updateUsage();
  }, []);

  const navContent = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-black transition z-50">
        <ul className="text-center text-xl p-20">
          <Link href="/">
            <li className="my-4 py-4 border-b font-semibold border-gray-500 text-white hover:text-2xl hover:bg-gray-400 hover:rounded">
              Home
            </li>
          </Link>
          <Link href="/features">
            <li className="my-4 py-4 border-b font-semibold border-gray-500 text-white hover:text-2xl hover:bg-gray-400 hover:rounded">
              Features
            </li>
          </Link>
          <Link href="/about">
            <li className="my-4 py-4 border-b font-semibold border-gray-500 text-white hover:text-2xl hover:bg-gray-400 hover:rounded">
              About
            </li>
          </Link>
          
          <Link href="/contact">
            <li className="my-4 py-4 border-b font-semibold border-gray-500 text-white hover:text-2xl hover:bg-gray-400 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <div className="hero">
      <nav>
        <Image
          src="/logo.png"
          alt="logo"
          className="logo"
          width={50}
          height={50}
        />
        <div className="md:flex lg:flex-1 items-center justify-center font-medium mx-auto hidden">
          <ul className="w-[100%] text-right">
            <li className=" inline-block list-none my-[10px] mx-[20px]">
              <Link className=" text-white " href="/">
                Home
              </Link>
            </li>
            <li className=" inline-block list-none my-[10px] mx-[20px]">
              <Link className="text-white" href="/">
                Features
              </Link>
            </li>
            <li className=" inline-block list-none my-[10px] mx-[20px]">
              <Link className="text-white " href="/">
                About
              </Link>
            </li>
            <li className=" inline-block list-none my-[10px] mx-[20px]">
              <Link className="text-white " href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src="/navprofile.webp"
          alt="logo"
          className="rounded-full cursor-pointer items-end ml-[40px] md:ml-[30px]"
          width={40}
          height={40}
          onClick={toggleMenu}
        />

        {isMenuOpen && (
          <div
            className=" absolute top-[100%] w-[280px] md:right-[10%] md:w-[350px] max-h-[400] overflow-hidden transition duration-[0.5s]"
            id="submenu"
          >
            <div className="bg-black p-[20px] rounded-md m-[10px] text-white">
              <div className="flex items-center justify-center">
                <Image
                  src="/navprofile.webp"
                  alt="user"
                  width={60}
                  height={60}
                  className="rounded-full mr-[15px]"
                />
                <h2 className="font-bold">Beta Beta Dev</h2>
              </div>
              <p className=" my-2 text-center font-bold text-gray-400">
                betabetadev@gmail.com
              </p>
              <hr className=" border-0 h-[1px] w-[100%] bg-[#ccc] mt-[15px] mb-[10px]" />
              <Link href="#" className="flex items-center my-[12px]">
                <p className="w-[100%] hover:font-semibold">Dashboard</p>
                <span className="text-[24px] transition transform duration-[0.5s]hover:translate-x-5">
                  »
                </span>
              </Link>

              <Link href="#" className="flex items-center  my-[12px]">
                <p className="w-[100%] hover:font-bold text-medium">Settings</p>
                <Image
                  src="/settings.svg"
                  alt="profile"
                  width={40}
                  height={40}
                  className="p-[9px] ml-[15px]"
                />
              </Link>
              <Link href="#" className="flex items-center  my-[12px]">
                <p className="w-[100%] hover:font-semibold">Create Team</p>
                <Image
                  src="/plusicon.svg"
                  alt="profile"
                  width={42}
                  height={42}
                  className=" p-[9px] ml-[15px]"
                />
              </Link>
              <hr className=" border-0 h-[1px] w-[100%] bg-[#ccc] mt-[15px] mb-[10px]" />
              <Link href="#" className="flex items-center my-[12px]">
                <p className="w-[100%] hover:font-semibold">Command Menu</p>
                <Image
                  src="/cmd.svg"
                  alt="profile"
                  width={40}
                  height={40}
                  className="p-[9px] ml-[15px]"
                />
              </Link>
              <Link href="#" className="flex items-center my-[12px]">
                <p className="w-[100%] hover:font-semibold">Theme</p>
                {/* <Image 
             src="/system.svg"
             alt="profile"
             width={40}
             height={40}
             className="p-[9px] ml-[15px]"
            /> */}
              </Link>

              <hr className=" border-0 h-[1px] w-[100%] bg-[#ccc] mt-[15px] mb-[10px]" />

              <Link
                href="https://betrbeta.com/"
                className="flex items-center my-[12px]"
              >
                <p className="w-[100%] hover:font-semibold">
                  Betr Beta Homepage
                </p>
                <Image
                  src="/link.svg"
                  alt="profile"
                  width={40}
                  height={40}
                  className="p-[9px] ml-[15px]"
                />
              </Link>

              <Link
                href="https://betrbeta.com/"
                className="flex flex-col items-start my-[12px]"
              >
                <h4 className="w-full hover:font-semibold">
                  You're in Mail Lite Plan
                </h4>
                <p className="text-xs text-gray-400">Plan expires on 2024</p>

                {/* Dynamic circular progress bar with Tailwind CSS classes */}
                <div className="relative w-20 h-20 flex">
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <div
                      className="rounded-full  border-t-4 border-blue-500 border-solid h-10 w-10 transform rotate-45"
                      style={{
                        transform: `rotate(${
                          360 * (usagePercentage / 100)
                        }deg)`,
                      }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-white ">
                    <span className="text-xs font-semibold">
                      {usagePercentage}%
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold">
                  Used {usagePercentage}%
                </span>
                <span className="text-xs font-semibold mb-0">
                  0.56 GB of 5GB used
                </span>
              </Link>

              {/* <Link
                href="https://betrbeta.com/"
                className="flex flex-col items-start my-[12px]"
              >
                <h4 className="w-[100%] hover:font-semibold">
                  You're in Mail Lite Plan
                </h4>
                <p className="text-xs text-gray-400">Plan expires on 2024</p>

                <div className="w-full mt-2">
                <div>
        <span className="text-xs font-semibold inline-block text-white">
          {usagePercentage}%
        </span>
      </div>
    <div className="bg-gray-300 h-4 w-full rounded overflow-hidden">
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${usagePercentage}%` }}
      ></div>
    </div>
  </div>
              </Link> */}

              <Link href="#" className="flex items-center my-[12px]">
                <p className="w-[100%] hover:font-semibold">Logout</p>
              </Link>
              <hr className=" border-0 h-[1px] w-[100%] bg-[#ccc] mt-[15px] mb-[10px]" />
              <Link href="#">
                <button className="rounded bg-white text-black font-semibold text-center items-center justify-center mx-auto flex py-2 px-4 mt-2">
                  Upgrade to Pro
                </button>
              </Link>
            </div>
          </div>
        )}

        <div>{click && navContent}</div>

        <button
          className="block text-3xl text-white font-bold md:hidden transition"
          onClick={handleClick}
        >
          {click ? <IoCloseSharp /> : <IoMenuOutline />}
        </button>
      </nav>
    </div>
  );
};
