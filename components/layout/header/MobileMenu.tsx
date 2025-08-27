import React from 'react'
import Link from 'next/link';
import { Button } from '@heroui/react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const MobileMenu = () => {
  return (
    <div>
       <Sheet>
  <SheetTrigger asChild>
    <Button variant="light" className='md:hidden'>
        <Menu/>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='flex items-center justify-center mb-8'>
        <Link href="/" className="text-2xl text-gray-900 items-center justify-center ">Logo</Link>
      </SheetTitle>
      <nav className='flex flex-col space-y-4 items-start'>
         <Link href="/" className='text-black font-bold hover:text-gray-300'>Home</Link>
          <Link href="/" className='text-black font-bold hover:text-gray-300'>About</Link>
          <Link href="/" className='text-black font-bold hover:text-gray-300'>Blog</Link>
          <Link href="/" className='text-black font-bold hover:text-gray-300'>Contact</Link>
      </nav>
      
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileMenu
