import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/Header";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shifan Khan - Portfolio",
  description: "Welcome to the portfolio of Shifan Khan. Explore my work in web developement, full stack development, NodeJs, ReactJS, and PHP.",
  publisher: "Shifan Khan",
  keywords: "Shifan Khan, portfolio, web developement, full stack development, NodeJs, ReactJS, and PHP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class">
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
