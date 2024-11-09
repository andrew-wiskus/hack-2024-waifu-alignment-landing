"use client"
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center bg-white p-20">
      {clicked ?
        <iframe src="https://www.loom.com/embed/94dcb57ec05e42c5aa3e37ff95a09116?sid=0d2a346e-8b36-41de-a0b6-adacaac7d5b6" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
        :
        <>
          <div className='cursor-pointer' onClick={() => setClicked(true)}>
            <img src="/banner.png" alt="waifus for alignment" className="border-[20px] border-black rounded-md object-contain object-bottom" />
          </div>
          <div className='cursor-pointer' onClick={() => setClicked(true)}>
            <p className="text-md text-center underline text-gray-800 mt-4">CLICK ME</p>
          </div>
        </>
      }
    </div>
  );
}
