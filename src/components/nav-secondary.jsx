import React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";

export function NavSecondary({
  items,
  ...props
}) {
  return (
    (<SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <Image src={item.icon} alt={item.title} width={20} height={20} />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
              {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
            </SidebarMenuItem>
          ))}
          <hr />
          <div className="my-2 px-2 flex items-center gap-4 cursor-pointer">
            <Image src="/assets/profile_icon.jpeg" alt="Logo" width={50} height={50} className="rounded-full" />
            <span className="text-sm font-semibold text-gray-600">Olivia</span>
          </div>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>)
  );
}
