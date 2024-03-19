import Image from "next/image";
import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Wine from "./Wine/page";
import Footer from "./Footer/Page";
import About from "./About/Page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-3/4 mx-auto m-4 px-auto">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-3/4 mx-auto m-4 px-auto">
      <Hero />
      <Wine />
      <About />
      <Footer />
      </div>
      </div>
  );
}
