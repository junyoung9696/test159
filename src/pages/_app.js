import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>가시비가시 KETI 대시보드</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
