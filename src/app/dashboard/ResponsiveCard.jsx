"use client";
import * as React from "react";
import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from "lucide-react";
import { FileText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function ResponsiveCard({ details, path }) {
  return (
    <Card
      className="w-full overflow-hidden mt-3 cursor-pointer"
      onClick={() =>
        redirect(`${path}/${details.id}/article?id=${details.entry}`)
      }
    >
      <div className="flex flex-col sm:flex-row">
        {/* Left side - Image (30% width on larger screens) */}
        <div className="w-full sm:w-[20%] sm:h-fit md:h-auto">
          <Image
            src="/contentSidePosterLeft.png"
            alt="Card image"
            width={1080}
            height={1080}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side - Content (70% width on larger screens) */}
        <div className="w-full sm:w-[80%] flex flex-col sm:px-1 md:px-2 lg:px-5 py-[2.5rem]">
          {/* Top section - Heading */}
          <CardContent className="flex-grow p-0">
            <h2 className="text-2xl font-bold">{details.title}</h2>
          </CardContent>

          {/* Bottom section - Completed icon */}
          <div className="flex items-center align-middle justify-end">
            <div className="flex flex-row space-x-4 items-center justify-between w-full text-[#667085]">
              <div className="flex flex-row space-x-6 mt-4">
                <div className="flex items-center">
                  <div className="flex gap-1">
                    <Image
                      src="/assets/lesson_black.svg"
                      alt="Lesson"
                      width={20}
                      height={20}
                    />
                    <p className="font-semibold">08:48</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1">
                    <Image
                      src="/assets/doc_black.svg"
                      alt="Quiz"
                      width={20}
                      height={20}
                    />
                    <p className="font-semibold">3 docs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1">
                    <Image
                      src="/assets/quiz_black.svg"
                      alt="Quiz"
                      width={20}
                      height={20}
                    />{" "}
                    <p className="font-semibold">2 quizzes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  justify-center text-white">
              {details.completed && (
                <Check className="w-5 h-5 bg-green-500 rounded-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
