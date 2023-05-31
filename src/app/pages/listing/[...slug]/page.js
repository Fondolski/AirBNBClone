"use client"


import {useEffect, useState} from 'react';
import { useSearchParams, usePathname, useParams } from 'next/navigation';
import dummyData from '../../../../assets/dummyData';
import OneListingBody from '@/app/components/OneListingBody';
import TopBar from '@/app/components/TopBar';

export default function Page() {

    
    const searchParams = useSearchParams();
    const [dummyArray, setDummyArray] = useState([])
    const [dummyArrayLoading, setDummyArrayLoading] = useState(true)
 
  const searchId = searchParams.get('id')

    useEffect(()=> {
       // console.log(searchId)
       // console.log(dummyData.data.info)
    },[])

    useEffect(()=> {

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

    return(
        <main className='flex min-h-screen flex-col items-center bg-white'>
            <TopBar />
            
            <div className='w-full'>
                <div className='w-full'>
                    <OneListingBody  dummyArrayLoading={dummyArrayLoading} dummyArray={dummyArray}/>
                </div>
    
                 
            </div>
        </main>
    )

}