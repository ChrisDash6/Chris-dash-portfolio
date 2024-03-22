"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const NavLink = motion(Link);
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-foreground rounded-full flex items-center justify-center hover:shadow-glass-inset custom-bg fixed
    top-4 left-4 w-fit self-start z-50"
      arial-label={"home"}
      name={"home"}
    >
      <span className="relative w-14 h-14 p-2 ">
        <Home
          className="w-full h-auto text-red-900 bg-gradient-to-t
             from-yellow-900 to bg-slate-200 p-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110 transition "
          strokeWidth={1.5}
        />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

        <span
          className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 shadow-glass-sm
     bg-gradient-to-t from-zinc-600 to bg-red-200 text-slate-900 backdrop-blur-xl rounded-lg text-sm "
        >
          Home
        </span>
      </span>
    </NavLink>
  );
};

export default HomeBtn;
