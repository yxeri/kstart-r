import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Header/Navbar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Navbar /> <Component {...pageProps} />
    </RecoilRoot>
  );
}