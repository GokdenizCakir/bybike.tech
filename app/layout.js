import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'ByBike Micromobility',
  description: 'ByBike Micromobility | Electric Bike Rentals',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={'bg-white overflow-hidden pt-[5rem] ' + montserrat.className}
      >
        <div className='overflow-y-scroll overflow-x-hidden h-[calc(100vh-5rem)]'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}