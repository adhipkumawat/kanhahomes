import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanha Homes Exports",
  description:
    "Explore Indian home decor, home textiles, kitchen, dining, and lifestyle products from Kanha Homes Exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-full flex-col bg-[#f5f9ff] font-sans text-[#071f45]">
        {children}
      </body>
    </html>
  );
}
