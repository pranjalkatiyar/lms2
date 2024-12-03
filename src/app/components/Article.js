import Image from "next/image";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { data as moduleData } from "../dashboard/[module]/sidebar";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

// interface ArticleProps {
//   article: {
//     title: string
//     subtitle?: string
//     author: {
//       name: string
//       avatar: string
//     }
//     publishedAt: string
//     content: Array<{
//       type: 'paragraph' | 'heading' | 'image'
//       content: string
//     }>
//     estimatedReadTime: number
//   }
// }

export default function Article({ article }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathArray = pathname.split("/");
  const module = moduleData.modules.find((item) => item.id == pathArray[2]);
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
            case "image":
              return (
                <figure key={index} className="my-8">
                  <Image
                    src={item.content}
                    alt="Article image"
                    width={800}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </figure>
              );
            default:
              return null;
          }
        })}
      </main>
    </div>
  );
}
