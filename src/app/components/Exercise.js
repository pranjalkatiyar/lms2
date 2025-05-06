"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { data as moduleData } from "../dashboard/[courses]/[module]/sidebar";
// import { articleData } from "../article/page";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
const Exercise = ({data}) => {
  // const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const pathArray = pathname.split("/");
//  // console.log(pathArray);
//   const filteredModuleData = moduleData.courses.filter((item) =>
//     pathname.includes(item.subpath)
//   );
//   const module = filteredModuleData[0].modules.find(
//     (item) => item.id == pathArray[3]
//   );
//   const articleSubId = searchParams.get("id");
//   const subsection = module.subsections.find((sub) =>
//     articleSubId ? sub.subid == articleSubId : sub.id === pathArray[4]
//   );

//   const filteredarticleData = articleData.filter((item) =>
//     pathname.includes(item.course_article_subpath)
//   );

//   const exerciseData = filteredarticleData[0].articles.find(
//     (item) => item.type == "exercise"
//   );

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-1 flex-col px-4 py-8 text-[#344054] pt-0 overflow-hidden w-full">
      <div className="flex flex-row align-middle items-center mt-5">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold my-3">{exerciseData.title}</h1>
          <div className="mx-12">
            <div className="flex justify-between">
              <button
                className="mr-0.5 border hover:bg-gray-300 text-black font-bold py-1.5 px-6 rounded-lg disabled:text-gray-300 disabled:hover:bg-white"
                disabled={!subsection.prevPath}
                onClick={() =>
                  redirect(
                    `${filteredModuleData[0].subpath}/${subsection.prevPath}`
                  )
                }
              >
                BACK
              </button>
              <button
                className="ml-0.5 border bg-blue-700 text-white font-bold py-1.5 px-6 rounded-lg"
                disabled={!subsection.nextPath}
                onClick={() =>
                  redirect(
                    `${filteredModuleData[0].subpath}/${subsection.nextPath}`
                  )
                }
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="flex flex-col space-y-4">
      {exerciseData.content.map((item, index) => {
        return (
          <Collapsible
            open={isOpen === index}
            onOpenChange={() => setIsOpen(isOpen === index ? -1 : index)}
            className="space-y-2 w-[100%] "
          >
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between shadow-lg px-4 py-5 rounded-md bg-slate-100">
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
      </div>
    </div>
  );
};

export default Exercise;
