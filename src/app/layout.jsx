import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
