import Image from "next/image";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { data as moduleData } from "../dashboard/[courses]/[module]/sidebar";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
// import Exercise from "../dashboard/[courses]/[module]/exercise/page";


export default function Article({ article }) {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const pathArray = pathname.split("/");
  // console.log(pathArray);
  // // moduledata taken from sidebar data
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
      
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">{article.title}</h1>
        {article.subtitle && (
          <h2 className="text-xl text-gray-600 mb-4">{article.subtitle}</h2>
        )}
      </header>

      <main>
        {article.content.map((item, index) => {
          switch (item.type) {
            case "paragraph":
              return (
                <p key={index} className="mb-4 text-md leading-relaxed">
                  {item.content}
                </p>
              );
            case "heading":
              return (
                <h2 key={index} className="text-xl font-bold my-4">
                  {item.content}
                </h2>
              );
              case "subheading":
              return (
                <h2 key={index} className="text-base font-bold my-4">
                  {item.content}
                </h2>
              );
            case "image":
              return (
                <figure key={index} className="my-8 flex justify-center">
                  <Image
                    src={item.content}
                    alt="Article image"
                    width={1080}
                    height={1080}
                    objectFit="cover"
                    className="rounded-lg w-[60%] "
                  />
                </figure>
              );
            case "html":
              return (
                <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              );
            case "table":
              return (
                <div className="flex flex-row gap-3" key={index}>
                  <div className="text-nowrap">{item.content.left}</div>
                  <div>{item.content.right}</div>
                </div>
              );
              case "list":
                return (
                  <ul 
                    key={index} 
                    className={` ml-6 ${
                      item.cssClass == null || item.cssClass == undefined 
                        ? "list-disc" 
                        : item.cssClass
                    } space-y-2 mb-3 `}
                  >
                    {item.list.map((innerItem) => {
                      return (<li>{innerItem}</li>);
                    })}
                  </ul>
                );
            case "list2":
              return(
                <ul 
                  key={index} 
                  className={` ml-6 ${
                    item.cssClass == null || item.cssClass == undefined 
                      ? "list-disc" 
                      : item.cssClass
                  } space-y-2 mb-3 `}
                >
                  {item.list2.map((innerItem) => {
                    return (<li><strong className={`${innerItem?.cssClass}`}>{innerItem.subheading2}</strong>: { innerItem.content2}</li>); 
                  })}
                </ul>
              )
            default:
              return null;
          }
        })}
      </main>
    </div>
  );
}
