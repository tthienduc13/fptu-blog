"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import ToastNotificationComp from "@/components/ToastNotificationComp";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "FPTHub",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const specificPath = [
    "/auth/sign-in",
    "/auth/sign-up",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];

  const hideSidebar = ["/blog/edit-blog"];
  const pathName = usePathname();
  const isSpecified = specificPath.includes(pathName);
  const isHideSidebar = hideSidebar.includes(pathName);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        {!isSpecified && <Header></Header>}
        {!isSpecified && !isHideSidebar && <Sidebar></Sidebar>}
        {children} <ToastNotificationComp />
      </body>
    </html>
  );
}
