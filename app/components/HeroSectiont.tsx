"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroSection = (): JSX.Element => {
  const router = useRouter();
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text_4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-purple-700">
              Hello! I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Gabby Leiva",
                1000, // wait 1s before replacing text
                "an Aerialist",
                1000,
                "an Acrobat",
                1000,
                "a Flow Artist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            Specializes in Aerial Fabric, Mini Hoop, Silk Fans, and S-Staffs
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-700 to-purple-700 text-white hover:bg-slate-200" type='button' onClick={() => router.push('mailto: gleiva967@gmail.com')}>
              Contact Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-700 to bg-purple-700 hove:bg-slate-800 text-white mt-3">
              <span className="block bg-black rounded-full px-5 py-2">
                <Link href="https://www.canva.com/design/DAGeNqNK0Io/-25m76--Yi-FwTA07U7x-A/view?utm_content=DAGeNqNK0Io&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd7933ea15b" target="_blank">View Resume</Link>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-6 place-self-center mt-7 lg:mt-5">
          <div className="rounded-full bg-gray-50 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/gabby_leiva_headshot.jpg"
              alt="Gabby smiling and hanging from aerial silks"
              className="rounded-full aspect-square absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
