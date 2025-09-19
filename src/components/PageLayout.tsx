import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;