import { RootProvider } from "@/components/providers";
import type { AppProps } from "next/app";

import "@/styles/style.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}
