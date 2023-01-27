import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const mont = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={mont.className}>
            <Component {...pageProps} />
        </main>
    );
}
