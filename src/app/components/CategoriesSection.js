"use client"

import {useState, useRef} from 'react';
import dummyData from "@/assets/dummyData";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";


export default function CategoriesSection() {


    const ref = useRef(null)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };


    const slideleft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500

    }

    const slideright = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return(
        <div className="md:w-full flex items-center justify-center w-8/12 md:10/12 mt-10">
            <div ref={ref} className="flex flex-row h-full items-center mb-0 md:w-9/12 overflow-x-scroll scroll-smooth scrollbar-hide">
                {dummyData.categories.map((item)=> {
                    return(
                        <div className="w-full flex items-center h-full cursor-pointer z-20">
                            <p className="text-sm w-full px-8 truncate py-2 cursor-pointer hover:scale-110">{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="visible flex absolute justify-between w-10/12 z-10">
                <div className='cursor-pointer bg-white border invisible absolute md:visible md:relative rounded-full p-2 flex items-center justify-center' onClick={()=> scroll(-1000)}>
                    <MdArrowBackIos />
                </div>
                <div className='cursor-pointer bg-white border visible relative md:invisible md:absolute rounded-full p-2 flex items-center justify-center' onClick={()=> scroll(-200)}>
                    <MdArrowBackIos />
                </div>
                <div className='cursor-pointer bg-white border invisible absolute md:visible md:relative  rounded-full p-2 flex items-center justify-center' onClick={()=> scroll(1000)}>
                    <MdArrowForwardIos/>
                </div>
                <div className='cursor-pointer bg-white border visible relative md:invisible md:absolute  rounded-full p-2 flex items-center justify-center' onClick={()=> scroll(200)}>
                    <MdArrowForwardIos/>
                </div>
            </div>
        </div>
    )
}