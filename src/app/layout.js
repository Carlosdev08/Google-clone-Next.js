import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "googleclon/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "An open source Google Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `relative min-h-screen ${inter.className}` } >
        {children}
        <Footer />
        </body>
    </html>
  );
}
