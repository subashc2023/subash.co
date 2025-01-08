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
  title: {
    default: "Subash Chandra - Technical Product Associate & Data Domain Architect",
    template: "%s | Subash Chandra"
  },
  description: "Personal website of Subash Chandra, a Data Domain Architect at J.P. Morgan Chase. Experienced in Cloud Engineering, AWS, Python, and Data Architecture.",
  keywords: [
    "Subash Chandra",
    "Technical Product Associate",
    "Data Domain Architect",
    "J.P. Morgan Chase",
    "Cloud Engineering",
    "AWS",
    "Python",
    "Data Architecture",
    "DevOps",
    "Software Engineer",
    "Dallas",
    "Texas"
  ],
  authors: [{ name: "Subash Chandra", url: "https://subash.us" }],
  creator: "Subash Chandra",
  publisher: "Subash Chandra",
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
    url: "https://subash.us",
    title: "Subash Chandra - Technical Product Associate & Data Domain Architect",
    description: "Personal website of Subash Chandra, a Technical Product Associate and Data Domain Architect at J.P. Morgan Chase. Experienced in Cloud Engineering, AWS, Python, and Data Architecture.",
    siteName: "Subash Chandra",
  },
  twitter: {
    card: 'summary',
    title: "Subash Chandra - Technical Product Associate & Data Domain Architect",
    description: "Personal website of Subash Chandra, a Technical Product Associate and Data Domain Architect at J.P. Morgan Chase.",
  },
  alternates: {
    canonical: 'https://subash.us'
  },
  metadataBase: new URL('https://subash.us'),
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
