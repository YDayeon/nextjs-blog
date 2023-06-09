import Link from 'next/link';
import Logo from '../../public/images/DY.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-2 pt-2'>
      <Link href='/' className='text-lg'>
        <Image src={Logo} alt='logo' width={50} />
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
