import Layout from "@/components/layout";
import { PostProvider } from "@/hooks";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostProvider>
  );
}
