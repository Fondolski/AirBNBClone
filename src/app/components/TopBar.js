import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import Link from 'next/link';

export default function () {
    return(
        <div className='flex flex-row border-b items-center justify-between w-11/12 md:w-full md:px-20 mt-5 md:mt-0 md:py-10 pb-2 md:py-5'>
            <div className='invisible absolute md:visible md:relative cursor-pointer'>
                <Image src="/hostshare3.png" alt="me" width="200" height="200" />
            </div>
            <div className='border w-full max-w-lg shadow-lg px-5 py-3 flex justify-between items-center flex-row rounded-3xl'>
                <div className='md:mx-5 mx-2 cursor-pointer hover:scale-125'>
                    <p className='border-r px-2 text-sm md:text-base'>Anywhere</p>
                </div>
                <div className='md:mx-5 mx-2 cursor-pointer hover:scale-125'>
                    <p className='border-r px-2 text-sm md:text-base'>Any week</p>
                </div>
                <div className='md:mx-5 mx-2 cursor-pointer hover:scale-125'>
                    <p className='text-sm md:text-base'>Add guests</p>
                </div>
                <Link  href={{
            pathname:"/pages/searchListing/slug",
            query: {
                
            }
        }}

        className=''
        ><div className='border w-7 h-7 md:h-9 md:w-9 flex items-center justify-center rounded-full' style={{backgroundColor: '#329a9a'}}>
                <FaSearch color='white' />
            </div>
        </Link>
                
            </div>
            <div className='cursor-pointer invisible absolute md:visible md:relative'>
                <div className='border shadow-2 p-3 flex flex-row items-center rounded-lg'>
                    <MdMenu />
                    <p className='ml-3'>
                      <BsPersonCircle size={20}/>
                    </p>
                </div>
            </div>
        </div>
    )
}