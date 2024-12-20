import '@mantine/core/styles.css';
import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import { theme } from '@/theme';

import '@/lib/styles/global.scss'

const catamaranSans = Catamaran({
  variable: "--font-catamaran-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Synergos",
  description: "Synergos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={catamaranSans.variable}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
