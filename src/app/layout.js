import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Gyanoday Vidya Mandir",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <ScrollToTop />
        <NavBar/>
        <Footer/>
      </body>
    </html>
  );
}
