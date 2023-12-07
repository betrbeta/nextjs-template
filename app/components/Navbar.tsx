"use client";

import Link from "next/link";
import ProfileMenuView from "./ProfileMenuView";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex justify-between items-start">
      <h1 className="title whitespace-nowrap">
        <Link href={"./"}>NextJS Template</Link>
      </h1>
      <ProfileMenuView />
    </div>
  );
};

export default Navbar;
