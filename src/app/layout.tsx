import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kenneth Abejuela — Portfolio",
  description:
    "Frontend Developer & UI/UX Designer from Davao City crafting beautiful, interactive web experiences.",
  openGraph: {
    title: "Kenneth Abejuela — Portfolio",
    description: "Frontend Developer & UI/UX Designer from Davao City.",
    images: ["https://i.imgur.com/4DIYrrg.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

// Applies the saved theme before first paint so there's no flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
