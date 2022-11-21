import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Header/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> <Component {...pageProps} />
    </>
  );
}
/*
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <MainLayout>
        <Navbar />
        <Component {...pageProps} />
        </MainLayout>
      </RecoilRoot>
    );
  }
}
export default MyApp*/