"use client";

import Image from "next/image";
import bg from "../../../../public/background/about-background.webp";
//import Hat from "@/components/Hat";
import RenderModel from "@/components/RenderModel";
import { Environment } from "@react-three/drei";
import AboutDetails from "@/components/about";
import dynamic from 'next/dynamic'

const Hat= dynamic(()=>import('@/components/Hat'),{ssr:false})
export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority sizes="100vm"
        alt="background-image"
        className="-z-50 w-full h-full object-cover fixed object-center opacity-25 top-0 left-0 "
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
          <Environment preset="sunset" />
        </RenderModel>
      </div>

      <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      <div className='absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <h1 className="text-6xl pt-10 xs:text-7xl sm:text-8xl lg:text-9xl font-bold text-blue-500">ChrisDash6</h1>
        <p className='font-light text-accent text-ls'>"Front-end excellence, from concept to launch."</p>
      </div>
      </div>
      <AboutDetails/>
    </>
  );
}
