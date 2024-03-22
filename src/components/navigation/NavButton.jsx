import React from "react";
import Link from "next/link";
import {
  Home,
  User,
  Palette,
  Phone,
  Github,
  Linkedin,
  Twitter,
  NotebookText,
} from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return (
        <Home
          className="w-full h-auto text-red-900 bg-gradient-to-t
             from-yellow-900 to bg-slate-200 p-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110 transition "
          strokeWidth={1.5}
        />
      );
    case "about":
      return (
        <User
          className="w-full h-auto text-black bg-gradient-to-t from-zinc-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );
    case "projects":
      return (
        <Palette
          className="w-full text-red-900 h-auto bg-gradient-to-t from-red-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );
    case "contact":
      return (
        <Phone
          className="w-full text-green-900 h-auto bg-gradient-to-t from-green-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-red-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );
    case "github":
      return (
        <Github
          className="w-full text-white h-auto bg-gradient-to-t from-slate-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );
    case "linkedin":
      return (
        <Linkedin
          className="w-full h-auto text-white bg-gradient-to-t from-blue-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-red-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );
    case "twitter":
      return (
        <Twitter
          className="w-full h-auto text-white bg-gradient-to-t from-blue-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-red-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );
    case "resume":
      return (
        <NotebookText
          className="w-full text-black h-auto bg-gradient-to-t from-zinc-900 to bg-slate-200 p-2 rounded-full
            focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110 transition"
          strokeWidth={1.5}
        />
      );

    default:
      return (
        <Home
          className="w-full h-auto text-red-900 bg-gradient-to-t from-yellow-900 to bg-slate-200 p-2 rounded-full"
          strokeWidth={1.5}
        />
      );
  }
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
const NavLink = motion(Link);
const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x},${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center hover:shadow-glass-inset"
              arial-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-2 animate-spin-slow-reverse group-hover:pause">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 shadow-glass-sm
         bg-gradient-to-t from-zinc-600 to bg-red-200 text-slate-900 backdrop-blur-xl rounded-lg text-sm "
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center hover:shadow-glass-inset"
              arial-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-2">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 shadow-glass-sm bg-gradient-to-t from-zinc-600 to bg-red-200 text-slate-900 backdrop-blur-xl rounded-lg text-sm",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
