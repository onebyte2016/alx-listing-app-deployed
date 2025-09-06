import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout"; // adjust path if needed
import "../styles/globals.css"; // ensure you have this file or remove this line

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
