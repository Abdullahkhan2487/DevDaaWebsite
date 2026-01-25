import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../assets/images/devdaa.png";
import BackgroundEffects from "@/components/BackgroundEffects";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "DevDaa - AI-Powered Development Solutions",
    description:
        "DevDaa specializes in AI, ML, and emerging technologies to deliver innovative software solutions that drive business growth.",
    icons: {
        icon: logo.src,
        apple: logo.src,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white relative`}
            >
                <BackgroundEffects />
                <div className="relative z-10">{children}</div>
            </body>
        </html>
    );
}
