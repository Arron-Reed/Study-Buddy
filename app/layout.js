import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AI Study Buddy",
  description: "Your AI study buddy helping you ace your exams",
};

const outfit= Outfit({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
