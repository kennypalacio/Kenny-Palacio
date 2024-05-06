'use client'
import React from "react";
import Ref from "../sub/Ref";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[0px] z-[20]">
    <div className="w-full flex flex-col items-center justify-center m-auto">
    <Ref/>
     <div className="mb-[20px] text-[15px] text-center">
            Copyright &copy; Kenny Palacio. All rights reserved.
            </div>
    </div>
  </div>
  )
}

export default Footer;