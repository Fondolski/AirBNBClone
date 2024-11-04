"use client"

import {useState, useEffect} from 'react'
import TopBar from '../../../components/TopBar';
import CategoriesSection from '../../../components/CategoriesSection';
import ListingsBody from '../../../components/ListingsBody';
import dummyData from '../../../../assets/dummyData';
import MapComponent from '@/app/components/MapComponent';


export default function Page() {


    const [dummyArray, setDummyArray] = useState([])
    const [dummyArrayLoading, setDummyArrayLoading] = useState(true)
    const [pageType, setPageType] = useState('listingPage')

    useEffect(()=> {
       // console.log(searchId)
       // console.log(dummyData.data.info)
    },[])

   /** useEffect(()=> {

       // setDummyArray(true)
        //setDummyArray([])

        if(dummyData) {

        
        const newDummyArray = dummyData.data.filter((item)=> {
            if(item.info.id === searchId) {
                return item
            }

        }) 

        setDummyArray([...newDummyArray])
        console.log(newDummyArray, '2')
        setDummyArrayLoading(false)
    }

    },[])

    **/
    return (
      <main className="flex min-h-screen flex-col items-center bg-white">
        <div className='flex flex-col items-center justify-center w-full '>
          <TopBar />
          <CategoriesSection />
          <div className='flex flex-row border justify-center md:visible md:relative invisible absolute '>
            <ListingsBody pageType={pageType} />
            <div className=' w-full h-full border'>
                <MapComponent pageType={pageType} dummyArray={dummyData.data}/>
            </div>
          </div>
          <div className='flex flex-col border justify-center md:visible md:relative visible '>
          <div className=' w-full h-96 border'>
                <MapComponent pageType={pageType} dummyArray={dummyData.data}/>
            </div>
            <ListingsBody pageType={pageType} />
            
          </div>
          
        </div>
      </main>
    )
  }