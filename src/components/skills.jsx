"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Desarrollo web especializado en <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Soluciones digitales a medida
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/web.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
