import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/home/Navbar";
import { ThemeProvider } from "@/components/theme";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// Improve metadata
export const metadata: Metadata = {
  title: "Subash Chandra",
  description: "Personal website and portfolio of Subash Chandra",
  authors: [{ name: "Subash Chandra" }],
  robots: "index, follow",
};

// Viewport and theme configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" }
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <main className="flex-1" id="main-content">
              {children}
            </main>
            <div className="h-1" aria-hidden="true" /> {/* Spacer for better layout */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
