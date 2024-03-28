import { Inter } from "next/font/google";
import MainNav from "./components/MainNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-2 border-green-400 mb-4 max-w-7xl mx-auto my-0 p-2">
          <MainNav />
          {/* <RootTemplate> {children}</RootTemplate> */}
          {children}
        </div>
      </body>
    </html>
  );
}
