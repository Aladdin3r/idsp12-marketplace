import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
