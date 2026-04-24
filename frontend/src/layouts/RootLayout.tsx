import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { SmoothScroll } from '../components/SmoothScroll';

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans">
        <Navbar />
        <Outlet />
        <Footer />
        <WhatsAppButton />
      </div>
    </SmoothScroll>
  );
}
