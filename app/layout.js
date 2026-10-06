import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata = {
  title: "BSIT Student Directory",
  description: "Lab 3 - Multi-Page Student Directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-washi font-serif text-sumi">
        <nav className="flex flex-col gap-3 border-b-2 border-sumi p-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-full bg-shu"></span>
            <span className="text-lg font-bold tracking-widest">DIRECTORY</span>
          </div>
          <div className="flex gap-6 text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-shu">
              Home
            </Link>
            <Link href="/about" className="hover:text-shu">
              About
            </Link>
            <Link href="/students" className="hover:text-shu">
              Students
            </Link>
          </div>
        </nav>
        <main className="mx-auto max-w-4xl p-6 sm:p-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
