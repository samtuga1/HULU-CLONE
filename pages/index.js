import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/header";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      {/* Results */}
    </>
  );
}
