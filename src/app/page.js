"use client"


import {useState, useEffect} from 'react'

import TopBar from './components/TopBar';
import CategoriesSection from './components/CategoriesSection';
import ListingsBody from './components/ListingsBody';

export default function Home() {

  const [pageType, setPageType] = useState('Home')
  
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className='flex flex-col items-center justify-center w-full '>
        <TopBar />
        <CategoriesSection />
        <ListingsBody pageType={pageType}/>
      </div>
    </main>
  )
}
