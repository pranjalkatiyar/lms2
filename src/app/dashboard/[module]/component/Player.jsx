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

export default function TestPlayer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathArray = pathname.split("/");
  const module = moduleData.modules.find(
    (item) => item.id == pathArray[2]
  );
  const articleSubId = searchParams.get("id");
  const subsection = module.subsections.find((sub) =>
    articleSubId ? sub.subid == articleSubId : sub.id === pathArray[3]
  );

  return (
    <div className="flex flex-1 flex-col px-4 py-8 text-[#344054] pt-0 overflow-hidden w-full">
      <div className="flex flex-row align-middle items-center mt-5">
        <SidebarTrigger className="" />
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold my-3">{module.title}</h1>
          <div className="mx-12">
            <div className="flex justify-between">
              <button
                className="mr-0.5 border hover:bg-gray-300 text-black font-bold py-1.5 px-6 rounded-lg disabled:text-gray-300 disabled:hover:bg-white"
                disabled={!subsection.prevPath}
                onClick={() => redirect(`/dashboard${subsection.prevPath}`)}
              >
                BACK
              </button>
              <button
                className="ml-0.5 border bg-blue-700 text-white font-bold py-1.5 px-6 rounded-lg"
                disabled={!subsection.nextPath}
                onClick={() => redirect(`/dashboard${subsection.nextPath}`)}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="w-full text-center flex justify-center">
        <div className="w-full justify-center flex flex-col lg:relative lg:left-2 ">
        <div className="text-start py-4 font-semibold text-xl">
          <div>What is FMS?</div>
        </div>
          <Player
            // className="justify-start h-2/5 rounded-xl w-full"
            src={
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }
            poster="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            blurDataURL="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          />
        </div>
      </div>
      <div className="mt-5">
        <h4 className="font-bold text-2xl">Transcript</h4>
        <hr className="my-2" />
        <p className="">
          Today, we're going to talk about FMS, or Flight Management System.
          <br />
          It's a crucial piece of equipment found in modern aircrafts.
          Basically, FMS is a computer system that helps pilots navigate and
          manage flights. It's like a highly advanced GPS system for airplanes.
          An FMS uses a database of navigational data, including airports,
          airways, and terrain. It also receives signals from satellite
          navigation systems like GPS. Pilots input their flight plan into the
          FMS, and the system calculates the optimal route, altitude, and speed.
          It also provides guidance during takeoff, landing, and en-route
          flight.
        </p>
      </div>
    </div>
  );
}
