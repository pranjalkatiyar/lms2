"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { data as moduleData } from "../sidebar";
import { useEffect, useState } from "react";
export default function FigmaComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathArray = pathname.split("/");
  const filteredModuleData = moduleData.courses.filter((item) =>
    pathname.includes(item.subpath)
  );
  const module = filteredModuleData[0].modules.find(
    (item) => item.id == pathArray[3]
  );
  // const module = moduleData.modules.find((item) => item.id == pathArray[2]);
  const articleSubId = searchParams.get("id");
  const subsection = module.subsections.find((sub) =>
    articleSubId ? sub.subid == articleSubId : sub.id === pathArray[4]
  );

  const figmaDetails = [
    {
      id: "/dashboard/general/md1",
      src: "https://embed.figma.com/design/kP4gWbDaYzoR9eNd8I9S3b/FMC-APP?node-id=38-2553&embed-host=share",
    },
    {
      id: "/dashboard/airbus_a320/md1/",
      src: "https://embed.figma.com/proto/7SdDQ22GopgDw2W5hUVyUP/Airbus-FMCG?node-id=92-30&scaling=scale-down&content-scaling=fixed&page-id=92%3A29&starting-point-node-id=92%3A30&embed-host=share",
    },
  ];

  const [figmaUrl, setFigmaUrl] = useState(null);

  useEffect(() => {
    const figma = figmaDetails.filter((item) => pathname.includes(item.id));
    // console.log(figma);
    setFigmaUrl(figma[0]);
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-white text-[#344054] pt-0 overflow-hidden w-full">
      <div className="flex flex-row align-middle items-center mt-5">
        <SidebarTrigger className="" />
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold my-3">{module.title}</h1>
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
      <h1 className="text-2xl font-bold">Live Playground</h1>

      {/* Main content - Figma embedding */}
      <main className="flex-grow p-4">
        <div className="w-full h-[calc(100vh-50px)] bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src={figmaUrl?.src}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </main>

      {/* Footer - Text content */}
      <footer className="p-4 bg-background border-t">
        <p className="text-sm text-muted-foreground">
          This is the Live Playground where you can interact with Figma designs.
          Use the navigation buttons above to move between different screens or
          components. The Figma embed above showcases the current design, and
          you can interact with it directly in this view.
        </p>
      </footer>
    </div>
  );
}
