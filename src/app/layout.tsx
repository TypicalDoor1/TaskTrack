import type { Metadata } from "next";
import { Inter } from "next/dist/compiled/google-fonts";
import Head from "next/head";
import { Global } from "@emotion/react";
import { css } from "@emotion/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskTrack",
  description: "The ideal Calendar for productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Other metadata */}
      </Head>
      <Global
        styles={css`
          body {
            font-family: ${inter.family};
          }
        `}
      />
      {children}
    </>
  );
}
