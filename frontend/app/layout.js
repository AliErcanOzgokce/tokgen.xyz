import { Inter } from "next/font/google";
import "./globals.css";
import { cookieToInitialState } from "wagmi";
import { config } from "@/components/web3/config";
import { headers } from "next/headers";
import Web3ModalProvider from "@/components/web3/Web3ModalProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tokgen.xyz",
  description: "Create Token with One Click",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className={inter.className}>
      <Web3ModalProvider initialState={initialState}>
        <Navbar />
          {children}
        <Footer />
      </Web3ModalProvider>
      </body>
    </html>
  );
}