"use client"
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(0)
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center bg-white p-0">
      {clicked == 0 &&
        <div className='cursor-pointer w-full h-full pt-4' onClick={() => setClicked(1)}>
          <img src="/first_img.jpg" alt="waifus for alignment" className="w-full h-full rounded-md object-contain object-bottom" />
        </div>
      }

      {clicked == 2 &&
        <iframe src="https://www.loom.com/embed/94dcb57ec05e42c5aa3e37ff95a09116?sid=0d2a346e-8b36-41de-a0b6-adacaac7d5b6" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
      }

      {clicked == 1 &&
        <div className="w-full h-full p-20">
          <div className='cursor-pointer' onClick={() => setClicked(2)}>
            <img src="/banner.png" alt="waifus for alignment" className="border-[20px] border-black rounded-md object-contain object-bottom" />
          </div>
          <div className='cursor-pointer' onClick={() => setClicked(true)}>
            <p className="text-md text-center underline text-gray-800 mt-4">CLICK ME</p>
          </div>
        </div>
      }
    </div>
  );
}
