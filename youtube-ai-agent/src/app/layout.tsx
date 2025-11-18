import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic YouTube Automation Planner",
  description:
    "Hinglish AI agent jo Shorts/Reels creators ke liye trending topics, scripts, voiceovers, aur automation workflows ready karta hai.",
  metadataBase: new URL("https://agentic-d4bd81a7.vercel.app"),
  openGraph: {
    title: "Agentic YouTube Automation Planner",
    description:
      "YouTube Shorts aur Reels ke liye viral Hinglish blueprint. Trending topics, scripts, posting schedules aur AI tool stack ek click me.",
    url: "https://agentic-d4bd81a7.vercel.app",
    siteName: "Agentic Creator Stack",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic YouTube Automation Planner",
    description:
      "AI agent jo tumhara Shorts game autopilot pe daal de — Hinglish me scripts, hooks, hashtags aur automation combos.",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
