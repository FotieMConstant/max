'use client'

import { AtomIcon, Settings2, BatteryIcon, ZapIcon } from "lucide-react"
import { usePathname } from 'next/navigation'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Production",
    url: "/",
    icon: AtomIcon,
  },
  {
    title: "Consommation",
    url: "/consommation",
    icon: ZapIcon,
  },
  {
    title: "Defaut",
    url: "/defaut",
    icon: Settings2,
  },
  {
    title: "Batterie",
    url: "/batterie",
    icon: BatteryIcon,
  },
]

export function AppSidebar() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className={pathname === item.url ? "bg-gray-100" : ""}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}