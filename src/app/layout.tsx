import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});



export const metadata: Metadata = {
  title: "Mohammed Jameel | Web Developer Portfolio",
  description: "Portfolio of Mohammed Jameel, a skilled web developer with expertise in React, Next.js, and modern web technologies.",
  keywords: "Mohammed Jameel, Web Developer, Portfolio, React, Next.js, Front-end Developer, JavaScript, Web Development",
  authors: [{ name: "Mohammed Jameel" }],
  robots: "index, follow", 
  openGraph: {
    title: "Mohammed Jameel | Web Developer Portfolio",
    description: "Explore the portfolio of Mohammed Jameel, showcasing web development projects with React, Next.js, and more.",
    // url: "https://your-portfolio-link.com", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}   antialiased`}>{children}</body>
    </html>
  );
}
