import React from 'react'
import img1 from "../components/assets/img1.jpg";
import img2 from "../components/assets/img2.jpg";
import img3 from "../components/assets/img3.jpg";

import { Button } from "../components";

function HeroSection() {
  return (
    <div className="w-full h-[80vh] bg-blue-500 flex items-center ">
    <div className="text-white flex justify-end items-center flex-col gap-5  max-w-lg text-center">
      <h1 className="text-6xl font-semibold ">CLOTHES MAKE THE MAN</h1>
      <p className="leading-5 mt-4">
        "Elevate your style, embrace confidence. Fashion that speaks volumes.
        Be bold, be chic, be unforgettable. Your wardrobe, your statement,
        your signature style."
      </p>
      <Button className="text-white bg-black "> Shop Now</Button>
    </div>
    <div className="flex justify-end gap-6 ">
      <img
        className="rounded-md w-[30vh] absolute top-36 left-[70vw] "
        src={img1}
        alt=""
      />
      <img
        className="rounded-md w-[30vh] absolute  top-80 left-[80vw]"
        src={img2}
        alt=""
      />
      <img className="rounded-md w-[40vh]  ml-11 " src={img3} alt="" />
    </div>
  </div>
  )
}

export default HeroSection
