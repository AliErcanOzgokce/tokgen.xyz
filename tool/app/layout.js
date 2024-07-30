import { Inter } from "next/font/google";
import "./globals.css";
import { cookieToInitialState } from "wagmi";
import { config } from "@/components/web3/config";
import { headers } from "next/headers";
import Web3ModalProvider from "@/components/web3/Web3ModalProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ChainProvider } from "@/app/lib/ChainContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tokgen.xyz | Token Generator App",
  description: "Create Token with One Click",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
    <link rel="shortcut icon" href="/favicon.ico" />
    <body className={inter.className}>
      <Web3ModalProvider initialState={initialState}>
        <ChainProvider>
          <Sidebar>
            {children}
            <Toaster
          position="bottom-center"
          toastOptions={{

            error: {
              style: {
                border: "1px solid #FF542F",
                background: "#292D2F",
                color: "white",
              },
            },

            success: {
              style: {
                border: "1px solid #4CAF50",
                background: "#292D2F",
                color: "white",
              },
            },

            loading: {
              style: {
                border: "1px solid #FFEB3B",
                background: "#292D2F",
                color: "white",
              },
            },

            className: "bg-black",
            custom: {
              style: {
                border: "1px solid #FF542F",
                padding: "16px",
                color: "#292D2F",
                background: "black",
              },
            },
          }}
        />
          </Sidebar>
          <SpeedInsights />
        </ChainProvider>
      </Web3ModalProvider>
    </body>
  </html>
    // <html lang="en">
    //   <link rel="shortcut icon" href="/favicon.ico" />
    //   <body className={inter.className}>
    //     <Web3ModalProvider initialState={initialState}>
    //       <Sidebar>
    //         <ChainProvider>{children}</ChainProvider>
    //       </Sidebar>
    //       <SpeedInsights />
    //     </Web3ModalProvider>
    //   </body>
    // </html>
  );
}
