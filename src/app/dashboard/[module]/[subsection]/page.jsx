"use client";
import Article from "@/app/components/Article";
import ModuleSidebar from "../sidebar";
import { data } from "@/lib/data";
import { usePathname } from "next/navigation";
// In a real application, you would fetch this data from an API
// const articleData = {
//   title: "Terminology of FMC & MCDU",
//   subtitle: "",
//   content: [
//     {
//       type: "paragraph",
//       content:
//         "Key words and definitions for Performance related pages, common to Boeing, Airbus on Honeywell based system. EX- Zero fuel Weight, cost index, cruise Altitude, Optimum Cruise Altitude, Recommended cruise Altitude.",
//     },
//     {
//       type: "paragraph",
//       content:
//         "Boeing FMC always tracks to the waypoint, NG FMC gives user option to create a Pseaudo fix. using Place bearing distance method, legacy Boeing FMC will not allow user to create Pseaudo fix. understanding.Key words and definitions for Performance related pages, common to Boeing, Airbus on Honeywell based system. EX- Zero fuel Weight, cost index, cruise Altitude, Optimum Cruise Altitude, Recommended cruise Altitude.",
//     },
//     {
//       type: "heading",
//       content: "The Rise of Machine Learning",
//     },
//     {
//       type: "paragraph",
//       content:
//         "Machine Learning, a subset of AI, has seen tremendous growth in recent years. It's the driving force behind many of the AI applications we use today, from voice assistants to recommendation systems.",
//     },
//     {
//       type: "image",
//       content: "/fmc.svg",
//     },
//     {
//       type: "paragraph",
//       content:
//         "Here we will learn about the fundamental's of flight management and different features of FMS which are integrated to make entire flight possible from Place A to B. We will learn about Lateral navigation and vertical navigation. We will learn about how Performance inputs are directly linked to vertical navigation. And relationship between Route, legs and Progress page for Lateral Navigation.",
//     },
//   ],
// };

export default function Page({ params }) {
  const module = data.modules.find((m) => m.id === params.module);
  const subsection = module?.subsections.find(
    (s) => s.id === params.subsection
  );

  return <Article article={subsection} />;
}

// import { SidebarLeft } from "@/components/sidebar-left"
// import { SidebarLeftModule } from "@/components/sidebar-module"
// import { SidebarRight } from "@/components/sidebar-right"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbList,
//   BreadcrumbPage,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import React from 'react'
// import ModuleSidebar from "../sidebar"

// const Modules = () => {
//   return (<ModuleSidebar/>
//   )
// }

// export default Modules
