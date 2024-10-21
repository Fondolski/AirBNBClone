"use client"


import dummyData from '@/assets/dummyData';
import {useEffect, useState, useCallback} from 'react';
import { MdStar, MdClose, MdArrowForwardIos, MdSingleBed} from "react-icons/md";
import { IoTrophy } from "react-icons/io5";
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import MapComponent from './MapComponent';
import DescriptionComponent from './DescriptionComponent';
import SleepingArrangements from './SleepingArrangeMents';
import PhotosSection from './PhotosSection';
import TitleHeader from './TitleHeader';
import RoomDetails from './RoomDetails';
import HostDetails from './HostDetails';
import DescriptionModal from './DescriptionModal';
import AmenitiesSection from './AmenitiesSection';


export default function OneListingBody({dummyArray, dummyArrayLoading}) {

    const [openModal, setOpenModal] = useState(false)
    const [amenitiesModal, setAmenitiesModal] = useState(false)

    const [ libraries ] = useState(['places']);
    const [pageType, setPageType] = useState('oneListing')

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)

      }

      const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        libraries: libraries
    });


    const newArray = range(1, 4)
    const newArrayAmenities = range(1, 8)

    useEffect(()=> {

        console.log(newArray)

        if(!dummyArrayLoading) {

            console.log(dummyArray[0], 'yes')
        
        console.log( 'No', dummyArrayLoading)

        }

    },[dummyArrayLoading, dummyArray])

    return (
        <div >
        <div className='w-full items-center flex justify-center'>
        {openModal || amenitiesModal ? <div className='bg-black fixed top-0 w-full h-full items-center flex justify-center opacity-70 z-20' ></div>: null}
             {!dummyArrayLoading && dummyArray.length > 0 ? 
             <div className='w-full max-w-5xl'>
                {openModal ? 
                <DescriptionModal dummyArray={dummyArray} setOpenModal={setOpenModal} />
                : null}
               
               <TitleHeader dummyArray={dummyArray}/>
                    <PhotosSection dummyArray={dummyArray} newArray={newArray} />
                    
              <HostDetails  dummyArray={dummyArray}/>
                <RoomDetails dummyArray={dummyArray} />
                <DescriptionComponent dummyArray={dummyArray} setOpenModal={setOpenModal} />
                <SleepingArrangements dummyArray={dummyArray} />
                <AmenitiesSection newArrayAmenities={newArrayAmenities} dummyArray={dummyArray} />
                <div className='p-1 mb-5'>
                    <p className='font-semibold'>Where you'll be</p>
                </div>
                <MapComponent dummyArray={dummyArray} pageType={pageType}/>
                
             </div>: 
             <div>...loading</div>}
        </div></div>
    )
}