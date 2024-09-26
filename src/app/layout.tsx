import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// // import dos modulos
// import {Roboto} from "next/font/google"
// import localFont from "next/font/local";

import {Menu} from './03 - components/menu'

// import {Footer} from '@/components/footer'
// import {Form} from '@/components/form'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const bg = ({
  src: {},
  variable: "--bg"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const style = 
  {
  head:"mx-5 flex flex-row mt-3",
  title: "text-white",
  p:"text-white gap-20 px-2 py-1 w-18",
  nav:"text-white gap-12 p-3 font-robFont flex flex-row justify-center align-center cursor-pointer",
  perfil: "w-7 ml-64 cursor-pointer self-start relative"
  }

  return (

    <html lang="en">
      <body>
        <Menu op1="Home" op2="Series" op3="Movies" op4="HBO" op5="New & Movies"/>



        {children}

      </body>
    </html>
  );
}
