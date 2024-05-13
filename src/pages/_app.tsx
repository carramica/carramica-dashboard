import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StrictMode, useEffect } from "react";
import { Flowbite, useThemeMode } from "flowbite-react";
import theme from "../flowbite-theme";
import { Inter } from "next/font/google";

// const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // const dark = localStorage.getItem("theme") === "dark";
  const [themeMode] = useThemeMode();

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <div className={inter.className}>
      <div className="bg-gray-50 dark:bg-gray-900 antialiased">
        <Flowbite theme={{ theme }}>
          <StrictMode>
            <Component {...pageProps} />
          </StrictMode>
        </Flowbite>
      </div>
    </div>
  );
}
