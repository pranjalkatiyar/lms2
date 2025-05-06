"use client";
import Player from "next-video/player";
import { data as moduleData } from "../sidebar.jsx";
import { redirect, usePathname, useSearchParams } from "next/navigation.js";
import { SidebarTrigger } from "@/components/ui/sidebar.jsx";
// Dynamically import the component to ensure server-side rendering issues are avoided.
// const VideoAmbient = dynamic(() => import("../hooks/VideoPlayer"), {
//   ssr: false,
// });
import { ChevronRight, ChevronLeft } from "lucide-react";
import MuxPlayer from '@mux/mux-player-react';

export default function TestPlayer({ data }) {
  console.log(data, "testplayer");
  //console.log("player", data);
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const pathArray = pathname.split("/");
  // const filteredModuleData = moduleData.courses.filter((item) =>
  //   pathname.includes(item.subpath)
  // );
  // const module = filteredModuleData[0].modules.find(
  //   (item) => item.id == pathArray[3]
  // );
  // const articleSubId = searchParams.get("id");
  // const subsection = module.subsections.find((sub) =>
  //   articleSubId ? sub.subid == articleSubId : sub.id === pathArray[4]
  // );

  return (
    <div className="flex flex-1 flex-col px-4 py-8 text-[#344054] pt-0 overflow-hidden w-full">
      {data.content.map((item, index) => {
        return (      <div>
      <div className="w-full text-center flex justify-center">
        <div className="w-full justify-center flex flex-col lg:relative lg:left-2 ">
          <div className="text-start py-4 font-semibold text-xl">
                <div>{data.title}</div>
              </div>
            <MuxPlayer
  playbackId={item.videoString[0].videoUrl}
  metadata={{
    video_title: 'Input Fields on the INIT A Page (Part 1)',
    viewer_user_id: 'Placeholder (optional)',
  }}
  accentColor="#046aff"
  primaryColor="#53d5fd"
/>
          {/* <Player
            className="justify-start rounded-xl w-full"
                src={
                  item.videoString[0].videoUrl}
            poster={ item.videoString[0].poster}
            blurDataURL={item.videoString[0].blurDataURL}
          /> */}
        </div>
      </div>
      {item.videoString[0]?.transcript && <div className="mt-5">
        <h4 className="font-bold text-2xl">Transcript</h4>
        <hr className="my-2" />
        <p className="">
         {item.videoString[0]?.transcript}
        </p>
        </div>}
        </div>)
      })}
    </div>
  );
}
