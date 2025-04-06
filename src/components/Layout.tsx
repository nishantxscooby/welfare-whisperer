
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/30">
      <Header />
      <main className="flex-1 p-4 md:p-6 w-full max-w-7xl mx-auto">
        {children}
      </main>
      <footer className="w-full py-6 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Welfare Whisperer • Helping citizens access government schemes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
