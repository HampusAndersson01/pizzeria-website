import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./global.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizzeria",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex flex-col min-h-screen bg-gray-800">
        <Header />

        <div className="flex-grow flex justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
