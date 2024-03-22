import React from "react";
import ItemLayout from "./itemLayout";




const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start "
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize text-accent font-bold">
            Architect of Engaging UI/UX Experiences
          </h2>
          <p className="font-light text-blue-500 text-xs sm:text-sm md:text-base">
            With a blend of creativity and technology, I work on crafting
            immersive digital experiences that captivate audiences. Leveraging
            the power of JavaScript, React, GSAP, Framer Motion, Tailwind, and
            Blender animation, I architect UI/UX solutions that push the
            boundaries of innovation. From dynamic web applications to stunning
            visual effects, I bring ideas to life with seamless interactions and
            captivating animations.
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full xs:col-span-6 lg:col-span-4"}>
          <p className=" font-semibold w-full text-left text-2xl sm:text-5xl text-accent">
            10+ <sub className="font-bod text-base pb-10">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full xs:col-span-6 lg:col-span-4"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl text-accent">
            2+ <sub className="font-bold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=ChrisDash6&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=3B82F6&text_bold=false"
            alt="ChrisDash"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=ChrisDash6&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=3B82F6&text_bold=false"
            alt="ChrisDash"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,react,git,github,blender,figma,js,nextjs,nodejs,npm,tailwind,threejs,ts,vercel,vscode&theme=dark"
            alt="ChrisDash"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !P-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=ChrisDash6&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="ChrisDash"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=ChrisDash6&repo=-Conway-s-Game-of-Life&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=3B82F6&text_bold=false"
            alt="ChrisDash"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
