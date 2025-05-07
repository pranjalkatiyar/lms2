'use client'
import { useGetCourseDetails, useGetCourses  } from "@/hooks/useCourses";
import { useSearchParams, useRouter } from "next/navigation";
import Article from "@/app/components/Article";
import React from "react";
import TestPlayer from "../component/Player";
import { SidebarTrigger } from "@/components/ui/sidebar";
import FigmaComponent from "../component/Figma";
import QuizComponent from "@/app/components/Quiz";
import Exercise from "@/app/components/Exercise";
import WormLoader from "@/app/components/WormLoader";

export default function Page({params}) {
  const router = useRouter();
  const searchparams = useSearchParams();
  const paramsHook = React.use(params);
  const courseId = paramsHook.courses;
  const moduleId = paramsHook.module;
  const id = searchparams.get("id");
  
  const {
    data: courses,
    isLoading: isCoursesLoading,
    error: coursesError,
  } = useGetCourses();

  const {
    data: courseDetails,
    isLoading: isDetailsLoading,
    error: detailsError,
  } = useGetCourseDetails(courseId);

  if (isCoursesLoading || isDetailsLoading) {
    return <div className="flex justify-center items-center h-screen"><WormLoader /></div>;
  }
  if (courseDetails && courses) {
    const moduleArticles = courseDetails[0].articles.filter(article => article.module_id === moduleId);
    const sortedArticles = moduleArticles.sort((a, b) => {
      const aParts = a.id.split('.').map(Number);
      const bParts = b.id.split('.').map(Number);
      for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const aVal = aParts[i] || 0;
        const bVal = bParts[i] || 0;
        if (aVal !== bVal) return aVal - bVal;
      }
      return 0;
    });

    const currentIndex = sortedArticles.findIndex(article => String(article.id) === String(id));
    const prevArticle = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;
    const nextArticle = currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;

    const filteredArticleData = moduleArticles.filter((article) => String(article.id) === String(id));
    const courseTitle = courses.find((course) => course.c_id === courseId);
    console.log(filteredArticleData,"filteredArticleData");
    const handleNavigation = (newId,doc_type) => {
      router.push(`/dashboard/${courseId}/${moduleId}/${moduleId}?id=${newId}`);
    };

    return (
      <div className="flex flex-1 flex-col px-4 py-8 text-[#344054] pt-0 overflow-hidden w-full">
        <div className="flex flex-row align-middle items-center mt-5">
          <SidebarTrigger className="" />
          <div className="flex justify-between w-full">
            <h1 className="text-4xl font-bold my-3">{courseTitle?.short_heading}</h1>
            <div className="mx-12">
              <div className="flex justify-between">
                <button
                  className="mr-0.5 border hover:bg-gray-300 text-black font-bold py-1.5 px-6 rounded-lg disabled:text-gray-300 disabled:hover:bg-white"
                  disabled={!prevArticle}
                  onClick={() => handleNavigation(prevArticle?.id,prevArticle.doc_type)}
                >
                  BACK
                </button>
                <button
                  className="ml-0.5 border bg-blue-700 text-white font-bold py-1.5 px-6 rounded-lg"
                  disabled={!nextArticle}
                  onClick={() => handleNavigation(nextArticle?.id)}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        {(() => {
          switch (filteredArticleData[0]?.doc_type) {
            case "article":
              return <Article article={filteredArticleData[0]} />;
            case "videoplayer":
              return <TestPlayer data={filteredArticleData[0]} />;
            case "playground":
              return <FigmaComponent data={filteredArticleData[0]} />;
            case "quiz":
              return <QuizComponent data={filteredArticleData[0]} />;
            case "exercise":
              return <Exercise data={filteredArticleData[0]} />;
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}
