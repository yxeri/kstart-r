import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Header/Navbar";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../components/stitches/darkTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme,
        light: "theme",
      }}
    >
    
    <RecoilRoot>
      <Navbar /> <Component {...pageProps} />
    </RecoilRoot>
    </ThemeProvider>
  );
}