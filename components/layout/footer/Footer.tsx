"use client";

import Link from 'next/link';

import { Button } from '@heroui/react';
import { Search, User, Menu, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-myprimarycolor text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo ve Açıklama */}
          <div className="md:col-span-4 text-center md:text-left">
            <Link href="/" className='text-2xl text-white font-bold hover:text-gray-300 transition-colors'>
              Logo
            </Link>
            <p className='text-gray-300 mt-4 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt.
            </p>
          </div>

          {/* Navigasyon Linkleri */}
          <nav className='md:col-span-4 text-center md:text-left'>
            <h3 className='text-white font-semibold text-lg mb-4'>Quick Links</h3>
            <div className='flex flex-col space-y-3'>
              <Link href="/" className='text-gray-300 hover:text-white transition-colors'>Home</Link>
              <Link href="/about" className='text-gray-300 hover:text-white transition-colors'>About</Link>
              <Link href="/blog" className='text-gray-300 hover:text-white transition-colors'>Blog</Link>
              <Link href="/contact" className='text-gray-300 hover:text-white transition-colors'>Contact</Link>
            </div>
          </nav>

          {/* Sosyal Medya */}
          <div className='md:col-span-4 text-center md:text-left'>
            <h3 className='text-white font-semibold text-lg mb-4'>Follow Us</h3>
            <div className='flex justify-center md:justify-start space-x-3'>
              <Button variant="light" size="sm" className="hover:bg-gray-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="light" size="sm" className="hover:bg-gray-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="light" size="sm" className="hover:bg-gray-200 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Blog. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
