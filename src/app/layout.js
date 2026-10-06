
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components";
import { Provider } from "react-redux";
import store from "@/redux/store";
import ReduxProvider from "./providers/ReduxProvider";


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

export const metadata = {
  title: "PrimeX Solution",
  description: "Oracle courses with video lessons and certification prep for SQL, PL/SQL, DBA, OCI, APEX and Autonomous Database.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ReduxProvider>

   
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
