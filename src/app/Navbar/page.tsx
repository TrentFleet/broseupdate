import React from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-1 w-full z-1 flex justify-between items-center p-4">
        <Link href="/" className="text-md text-white hover:opacity-50">
          <MenuIcon size={30} />
        </Link>
        
        <button className="text-xs text-white border-2 px-4 p-2 border-white rounded-2xl hover:opacity-50 font-semibold">
          Contact us
        </button>
      </div>
      
      <div className="flex justify-center items-center">
        <Image src="/images/lilwhite1.svg" width={40} height={10} alt={""} />
      </div>
    </>
  );
}

export default Navbar;