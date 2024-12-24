import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const validate = 3600

export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "Tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto" >
          {children}
        </main>
      </body>
    </html>
  );
}
