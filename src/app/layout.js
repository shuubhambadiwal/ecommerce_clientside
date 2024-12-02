import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "react-redux";
import store from "../store/store"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ecommerce",
  description: "Build by Shubham",
};

export default function RootLayout({ children }) {
  return (
    <Providers store={store}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </Providers>
  );
}
