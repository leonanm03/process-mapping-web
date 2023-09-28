import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { ProcessesProvider } from "@/contexts/processesContext";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Process Mapping" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-[#FAF5FF]">
      <body
        suppressHydrationWarning={true}
        className="min-w-full min-h-full bg-[#FAF5FF]"
      >
        <Providers>
          <ProcessesProvider>
            <Navbar />
            {children}
          </ProcessesProvider>
        </Providers>
      </body>
    </html>
  );
}
