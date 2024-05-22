import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaseX",
  description: "Custom phone cases for your favorite moments",
  icons: {
    icon: "/snake-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
