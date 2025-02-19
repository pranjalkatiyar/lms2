"use client";
import { SidebarLeft } from "@/components/sidebar-left";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Plane, Youtube } from "lucide-react";
import Image from "next/image";
import data from "../data";
import ResponsiveCard from "../ResponsiveCard";
import { Progress } from "@/components/ui/progress";
import { FileText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { useEffect, useState } from "react";
import { redirect, usePathname } from "next/navigation";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const filteredData = data.filter((item) =>
    pathname.includes(item.path)
  );

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset className="py-4">
        <div className="   top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Image
              src="/assets/college_logo.svg"
              alt="Logo"
              width={45}
              height={45}
              className="pt-4"
            />
            <div className="mt-4 ">
              <div>
                <h3 className="text-3xl flex">Hello Olivia</h3>
              </div>
              <div>
                <p className="font-extralight text-gray-500 uppercase">
                  Spartan College of Aeronautics and Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* course details */}
          <div className="mx-auto  h-32 w-full rounded-xl bg-muted/50">
            <div className="relative bg-red h-[30vh]">
              <Image
                src={"/MainBackground.svg"}
                alt="Background"
                className="w-full object-cover rounded-t-xl"
                layout="fill"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-center text-white p-4">
                <p>COURSE</p>
                <h1 className="text-left text-2xl md:text-xl sm:text-lg font-bold">
                  {filteredData[0].full_heading}
                </h1>
                <div className="flex items-center space-x-2 mt-2">
                  <Image
                    src="/assets/logo_white.svg"
                    alt="Plane"
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  <span>SimVizLabs LLC</span>
                </div>
                <div className="flex flex-row space-x-4 justify-between w-full mt-4 md:text-sm">
                  <div className="flex flex-col w-[50%]">
                    <div className="flex flex-row space-x-4 mt-4 w-[60%] justify-between">
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/assets/lesson.svg"
                          alt="Lesson"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        <div className="text-center text-xs font-semibold">
                          4/76 <span className="font-thin">lessons</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/assets/quiz.svg"
                          alt="quiz"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        <div className="text-center text-xs font-semibold">
                          2/35 <span className="font-thin">quizzes</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/assets/progress.svg"
                          alt="progress"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        <div className="text-center text-xs font-semibold">
                          5/10 <span className="font-thin">progress</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-600 opacity-70 rounded h-2.5">
                        <div className="bg-blue-500 h-full rounded w-[33%] opacity-100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex item-baseline">
                    <button
                      className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-6 rounded-xl bg-opacity-80 h-[2.75rem] w-[12rem]"
                      onClick={() => redirect("/dashboard/md1/videoplayer")}
                    >
                      <div className="opacity-100">RESUME COURSE</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-[100vh] top-24 relative w-full rounded-xl mt-10">
            {/* course description */}
            <div className="mt-5 flex gap-y-5 flex-col">
              <div>
                <div className="mt-4 mb-2 font-semibold text-[#344054] opacity-50">
                  COURSE DESCRIPTION
                </div>
                <p>
                  This course provides a foundational understanding of the
                  Flight Management system (FMS) and its integration with modern
                  Autoflight systems. It is designed for pilots who seek to
                  advance their career in the airline industry. Airlines heavily
                  rely on advanced systems for optimized flight operations, and
                  airlines prioritize candidates who demonstrate strong
                  technical knowledge and experience in these areas. This course
                  will give you a competitive edge in airline hiring processes
                  and prepare you for success in the world of commercial
                  aviation.
                </p>
              </div>
              <div>
                <div className="mt-4 mb-2 font-semibold text-[#344054] opacity-50">
                  KEY TOPICS:
                </div>
                <ul className="mt-3">
                  <li>- Overview of FMS and Autoflight components.</li>
                  <li>
                    - Understand relationship between FMS and Autoflight system
                    and how they work together to execute precise and efficient
                    flight, both in terminal and enroute environment.
                  </li>
                  <li>
                    - Understanding FMC functions to include different databases
                    and phases of flight.
                  </li>
                  <li>- Autoflight System modes and interaction.</li>
                  <li>- Understand and implement LNAV and VNAV modes.</li>
                  <li>- Understand and implement LNAV and VNAV modes.</li>
                </ul>
              </div>
            </div>
            {/*  modules */}
            <div className=" flex flex-col gap-4">
              {filteredData[0].modules.map((item, index) => {
                return (
                  <div key={index}>
                    <h1 className="font-bold uppercase my-2 text-[#344054] opacity-50">
                      {`MODULE ${item.id[item.id.length - 1]}`}
                    </h1>
                    <strong className="font-bold text-2xl text-[#344054]">
                      {item.heading}
                    </strong>
                    <ResponsiveCard details={item} path={filteredData[0].path} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SidebarInset>
      {/* <SidebarRight /> */}
    </SidebarProvider>
  );
}
