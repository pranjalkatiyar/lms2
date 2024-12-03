import { Inter } from "next/font/google";
// import SidebarComponent from '@/components/sidebar'
import { cn } from "@/lib/utils";
// import './globals.css'
import ModuleSidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App Name",
  description: "Description of your application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <ModuleSidebar>
          {children}
          </ModuleSidebar>
        </div>
      </body>
    </html>
  );
}
