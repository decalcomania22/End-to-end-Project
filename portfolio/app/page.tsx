import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:'Home', link:'/',icon: <FaHome/>}
        ]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
//justify-center:to center horizontally
//items-center:to center vertically
//flex-col: to change orientation
//overflow-hiden: so we dont get the scroll bars
//mx-auto: gives space to middel part of screen
//sm:px-10: padding on left and write only if media minwidth is 640 px
