import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../utils/Providers";
import ThemeSwitcher from "@/utils/Themeswitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskflows",
  description: "Make the better flow in task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
