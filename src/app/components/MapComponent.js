"use client"

import {useState} from 'react'


import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api'


export default function MapComponent ({dummyArray, pageType}) {

    const [ libraries ] = useState(['places']);

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        libraries: libraries
    });


    return(
        <div className='w-full h-full'>
            {pageType === 'oneListing' ?
             <div className='w-full h-full'>
                
                {isLoaded ? 
                <GoogleMap
                    
                    
                options={{
                    center: { lat: dummyArray[0].info.location.lat, lng: dummyArray[0].info.location.long },
                    zoom: 8
                }}
                    mapContainerClassName='w-full max-w-3xl h-96 mb-20'>
                    </GoogleMap>
                    : null }
                </div>:null}
                {pageType === 'listingPage' ?
             <div className='w-full h-full fixed'>
                
                {isLoaded ? 
                <GoogleMap
                    
                    
                options={{
                    center: { lat: -1.2742084848333695, lng:  36.81151862302079 },
                    zoom: 8
                }}
                    mapContainerClassName='md:w-full  md:h-full w-full h-full'>
                    </GoogleMap>
                    : null }
                </div>:null}
            </div>
    )
}