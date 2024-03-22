"use client";

import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpeg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
//import Hat from "@/components/Hat";
import RenderModel from "@/components/RenderModel";
import { Environment } from "@react-three/drei";
import dynamic from 'next/dynamic'

const Hat= dynamic(()=>import('@/components/Hat'),{ssr:false})
export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vm"
        src={bg}
        alt="background-image"
        className="-z-50 w-full h-full object-cover fixed object-center opacity-25 top-0 left-0 "
      />

      <ProjectList projects={projectsData} />

      <div
        className="flex items-center justify-center fixed top-16 lg:top-20 left-1/2 -translate-x-1/2
      lg:translate-x-0 -z-10 lg:-left-2 h-screen"
      >
        <RenderModel>
          <Hat />
          <Environment preset="sunset" />
        </RenderModel>
      </div>
    </>
  );
}
