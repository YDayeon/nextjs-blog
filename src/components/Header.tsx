import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between px-2 py-2'>
      <Link href='/' className='text-lg'>
        Logo
      </Link>
      <nav className='flex gap-1.5'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
