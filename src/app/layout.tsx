import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dayoen Blog',
  description: "This is Dayeon's Blog using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header className='flex justify-between px-2'>
          <Link href='/'>Logo</Link>
          <nav className='flex gap-1.5'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
        <footer className='absolute bottom-0 w-full text-center'>
          Have a lovely day
        </footer>
      </body>
    </html>
  );
}
