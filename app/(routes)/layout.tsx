import React from 'react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
// RoutesLayout bileşeninin hangi props'ları (özellikler) alabileceğini önceden tanımlar:
interface RoutesLayoutProps {
    children: React.ReactNode;
}

const RoutesLayout = ({children}: RoutesLayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen '>
        <Header />
      <main className='flex-grow container mx-auto px-4 py-8'>
        {children}
      </main>      
      <Footer />
    </div>
    
  )
}

export default RoutesLayout
