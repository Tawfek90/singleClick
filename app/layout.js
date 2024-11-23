import Providers from "@/components/providers/Providers";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata = {
  title: "Fake Store App",
  description: "A modern e-commerce platform powered by Next.js",
  keywords: "e-commerce, fake store, Next.js, shopping",
  author: "Your Name",
};

// Viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children || <p>Content is loading...</p>}
        </Providers>
      </body>
    </html>
  );
}
