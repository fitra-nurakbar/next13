import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: any;
}) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/posts"}>Posts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
