import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Md. Suman Sarkar | Fullstack Software Engineer',
  description:
    'Portfolio of Md. Suman Sarkar — Fullstack Software Engineer with 3+ years experience engineering enterprise ERP platforms, scalable cloud inventory systems, and modern web apps using Next.js, React, TypeScript, Node.js, and PostgreSQL.',
  keywords: [
    'Suman Sarkar',
    'Fullstack Software Engineer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Prisma',
    'Enterprise ERP Developer',
    'Bangladesh Software Engineer'
  ],
  authors: [{ name: 'Md. Suman Sarkar' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/profile-avatar.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme="light" position="bottom-right" autoClose={3000} />
        <main className="min-h-screen relative mx-auto px-4 sm:px-8 lg:max-w-7xl text-slate-900">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </html>
  );
}
