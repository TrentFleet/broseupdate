import React from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between font-Badger my-4 space-x-10">
      <Link href="/" className="text-2xl text-gray-700 hover:text-pink-200">
        <MenuIcon size={36} />
      </Link>

      <Image src="/1.svg" width={40} height={40} alt={""} />
      <button className="text-xl text-gray-700 border-2 border-gray-700 rounded-xl p-2 hover:bg-gray-700 hover:text-pink-200 font-Badger font-semibold">
        Contact Us
      </button>
    </div>
  );
}

export default Navbar;
