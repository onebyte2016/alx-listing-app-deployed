// components/layout/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
