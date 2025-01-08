import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/home/Navbar";
import { ThemeProvider } from "@/components/theme";
import { siteConfig } from "@/config/site";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// Improve metadata
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.longDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.longDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.longDescription,
  },
  alternates: {
    canonical: siteConfig.url
  },
  metadataBase: new URL(siteConfig.url),
};

// Viewport and theme configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.theme.light.background },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.theme.dark.background }
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
