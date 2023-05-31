"use client"


import {useEffect} from 'react'
import Image from 'next/image';
import { MdStar} from "react-icons/md";
import Link from 'next/link';


export default function DetailsContainer({item}) {

    useEffect(()=> {
        
    }, [])

    return(
        <Link  href={{
            pathname:"/pages/listing/slug",
            query: {
                id: item.info.id
            }
        }}
        
        className='flex w-full max-w-sm items-center h-full m-3 hover:scale-110 cursor-pointer'>
        <div className='flex w-full max-w-sm items-center h-full'  style={{minWidth: 200, minHeight: 100 }}>
            <div className='w-full flex flex-col items-center'>
                <div className="rounded-md flex items-end w-full h-80 m-5" imageStyle={{ borderRadius: 20}} style={{backgroundImage: 'url(' + `${item.info.mainImage.url}` + ')', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', overflow: 'hidden'}}>
                </div>
                <div className='w-full'>
                    <div className='flex flex-row justify-between'>
                        <div className='w-8/12'>
                            <p>{item.info.title}</p>
                        </div>
                        <div className='flex flex-row justify-center h-10 items-center'>
                            <MdStar />
                            <div>{item.info.ratings.value}</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='font-bold'>{item.info.currency.symbol}</div>
                        <div className='font-semibold'>
                            {item.info.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )

}