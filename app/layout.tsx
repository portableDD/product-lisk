import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Desserts Cart",
  description:
    "Browse and order delicious desserts with our interactive cart system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}
