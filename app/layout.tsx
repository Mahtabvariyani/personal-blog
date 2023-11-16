import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    
    appearance={{
      baseTheme: dark,
      signIn: { baseTheme: neobrutalism },
    }}

    
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
