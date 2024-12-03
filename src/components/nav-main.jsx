"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";
export function NavMain({ items }) {
  const checkdata = ["stats", "inbox", "video"];

  return (
    <>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={item.isActive}>
              <div
                className="cursor-pointer"
                onClick={() => redirect(item.url)}
              >
                <Image src={item.icon} alt={item.title} width={20} height={20} />
                <span>{item.title}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
