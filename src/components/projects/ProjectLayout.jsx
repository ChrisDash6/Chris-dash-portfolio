import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";

const item = {
  hidden: { opacity: 0,y:100 },
  show: { opacity: 1,y:0 },
};
const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
    variants={item}

    href={demoLink}
    target={"_blank"}
    className="flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4
    text-sm md:text-base  md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-2xl font-bold text-accent">{name}</h2>
        <p className="text-blue-500 hidden sm:inline-block ">{description}</p>
      </div>
      <div className="flex-1 mx-2 bg-transparent border-b border-dashed border-muted" />
      <p className="text-blue-500 sm:text-accent">{new Date(date).toDateString()}</p>
    </NavLink>
  );
};

export default ProjectLayout;
