import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProject from "./components/RecentProject";
import { navItems } from "./data";
import Clients from "./components/Clients";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProject/> 
        <Clients/>
        {/* <Experience/> */}
        <Footer/>
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
