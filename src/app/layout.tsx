import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] })

const fontHeading = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
})

const fontBody = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Whatsapp CRM & Marketing",
  description: "Whatsapp Business CRM and Marketing tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        cn(
            "antialiased",
            fontHeading.variable,
            fontBody.variable
        )
      }
      >
      {children}
      </body>
    </html>
  );
}
