"use client";

import Link from 'next/link';
import { Button } from '@heroui/react';
import { Search, User, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';


export default function Header() {
  return (
    <header className="bg-myprimarycolor text-white p-4 shadow-sm top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        <Link href="/" className='text-xl text-white font-bold'>
          Logo
        </Link>

        <nav className='hidden md:flex space-x-6'>
          <Link href="/" className='text-white font-bold hover:text-gray-300'>Home</Link>
          <Link href="/" className='text-white font-bold hover:text-gray-300'>About</Link>
          <Link href="/" className='text-white font-bold hover:text-gray-300'>Blog</Link>
          <Link href="/" className='text-white font-bold hover:text-gray-300'>Contact</Link>
          </nav>
        <div className='flex items-center space-x-2'>
          <Button variant="light">
            <Search />
          </Button>

          <Link href={"/login"}>
            <Button variant="light">
              <User />
            </Button>          
          </Link>
          
          <MobileMenu/>
        </div>
      </div>
    </header>
  );
}
