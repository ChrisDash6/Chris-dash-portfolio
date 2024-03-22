"use client";

import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";

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
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
          <h1 className="text-blue-500 font-semibold text-center text-4xl capitalize">
            Get in touch
          </h1>
          <p className="text-center text-accent font-light text-sm xs:text-base">
            Need a website that stands out? Let's connect! Whether you have a
            project in mind or just want to chat about web development, I'm here
            to help. Drop me a line and let's create something amazing together
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
