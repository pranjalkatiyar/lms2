import { Inter } from "next/font/google";
// import SidebarComponent from '@/components/sidebar'
import { cn } from "@/lib/utils";
// import './globals.css'
import ModuleSidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
        <div className="flex h-screen w-screen">
          <ModuleSidebar>
          {children}
          </ModuleSidebar>
        </div>
  );
}
