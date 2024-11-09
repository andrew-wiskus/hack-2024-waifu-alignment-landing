import Image from "next/image";

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center bg-white padding-20">
      <a href="https://www.loom.com/share/94dcb57ec05e42c5aa3e37ff95a09116?sid=d1e6ba83-1365-47db-803a-b2e303d40236">
        <img src="/banner.png" alt="waifus for alignment" className="border-[20px] border-black rounded-md object-contain object-bottom" />
      </a>
      <a href="https://www.loom.com/share/94dcb57ec05e42c5aa3e37ff95a09116?sid=d1e6ba83-1365-47db-803a-b2e303d40236">
        <p className="text-md text-center underline text-gray-800 mt-4">CLICK ME</p>
      </a>
    </div>
  );
}
