"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
  ChartNoAxesColumn
} from "lucide-react"
// import logo from "/logo.svg"
import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { redirect } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Video } from "lucide-react"
import Image from "next/image"

// This is sample data.
const data = {
  teams: [
    {
      name: "Simvizlabs",
      logo: '/assets/logo.svg',
      plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: "/assets/home.svg",
      isActive: true,
    },
    {
      title: "Performance",
      url: "/stats",
      icon: "/assets/performance.svg",
    },
    {
      title: "Live Session",
      url: "/video",
      icon: "/assets/live.svg",
    },
    {
      title: "Support",
      url: "/inbox",
      icon: "/assets/support.svg",
      badge: "10",
    },
  ],
  navSecondary: [
    // {
    //   title: "Calendar",
    //   url: "",
    //   icon: Calendar,
    // },
    {
      title: "Settings",
      url: "",
      icon: "/assets/settings.svg",
    },
    // {
    //   title: "Templates",
    //   url: "",
    //   icon: Blocks,
    // },
    // {
    //   title: "Trash",
    //   url: "",
    //   icon: Trash2,
    // },
    {
      title: "Help",
      url: "",
      icon: "/assets/help.svg",
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "",
      emoji: "📚",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "",
      emoji: "🌱",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "",
      emoji: "🗣️",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "",
      emoji: "🏠",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "",
      emoji: "💰",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "",
      emoji: "🎬",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "",
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "",
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "",
          emoji: "✍️",
        },
        {
          name: "Art & Design Portfolio",
          url: "",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "",
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "",
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "",
          emoji: "📸",
        },
      ],
    },
  ],
}

export function SidebarLeft({
  ...props
}) {
  const logo = data.teams[0].logo
  return (
    <Sidebar className="border-r-0" {...props} collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton className="w-fit px-1.5" onClick={() => redirect('/home')}>
              <Image src={logo} alt="Logo"  width={35} height={35} />
        </SidebarMenuButton>
        <div className="h-3" />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
