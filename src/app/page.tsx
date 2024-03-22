import Image from "next/image";
import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Wine from "./Wine/page";
import Footer from "./Footer/Page";


export default function Home() {
  return (
    <div className="flex flex-col justify-center w-11/12 mx-auto m-4 px-auto">
      <Navbar />
      <Hero />
      <Wine />
      <Footer />
      </div>
      
  );
}
