import { component$ } from "@builder.io/qwik";
import { ButtonStd } from "~/components/ui/button-std";
import { Link } from "@builder.io/qwik-city";

export const Hero = component$(() => {
  return (
    <section class="py-24 w-full bg-gradient-to-br from-gray-900 to-sky-900 shadow-xl">
      <div class="flex flex-col h-full items-center justify-center w-full">
        <div
          className="relative flex justify-center text-white text-5xl md:text-6xl lg:text-8xl tracking-tight font-extrabold font-sans">
          <div className="text-blue-300 ">Turner & Townsend</div>
        </div>

        <div
          className="relative flex justify-center text-white text-5xl md:text-6xl lg:text-8xl tracking-tight font-extrabold font-sans">
          <div className="text-blue-500 ">Qwik</div>
        </div>
        <div className="text-white text-4xl md:text-5xl lg:text-7xl tracking-tighter font-extrabold font-sans">
          Intro
        </div>

        <div class="text-slate-300 mt-24 italic text-xl font-light">
          ~ Oscar Lagatta ~
        </div>
        <div class="text-white mt-24 itali text-xl italic">
          Get the Qwik knowledge Your Need
        </div>
        <Link href="/signup">
          <ButtonStd
            title="PRESS START"
            classText="bg-sky-500 hover:bg-sky-400 mt-5 shadow-xl hover:shadow-none"
          />
        </Link>
      </div>
    </section>
  );
});
