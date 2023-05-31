import { MdStar} from "react-icons/md";
import { IoTrophy } from "react-icons/io5";

export default function TitleHeader({dummyArray}) {
    return(
        <div className='invisible absolute md:visible md:relative p-1'> 
                    <div>
                        <div className='mt-5 text-2xl font-semibold'>{dummyArray[0].info.title}</div>
                    </div>
                    <div className='flex flex-row items-center mt-2'>
                        <div>
                            <MdStar />
                        </div>
                        <div className='ml-2 '>
                            {dummyArray[0].info.ratings.value}
                        </div>
                        <div className='border-b ml-2 border-black cursor-pointer'>{`${dummyArray[0].info.visibleReviewCount} reviews`}</div>
                        <div className='ml-2 '>
                            {dummyArray[0].info.host.isSuperhost === true ?
                            <div>
                                <div className='flex flex-row items-center'>
                                    <IoTrophy />
                                    <p>Supperhost</p>
                                </div>
                            </div>: <div></div>}
                        </div>
                        <div className='ml-2  border-b border-black cursor-pointer'>
                            {dummyArray[0].info.location.city},
                        </div>
                        <div className='ml-2 border-b border-black cursor-pointer'>{dummyArray[0].info.location.country.title}</div>
                    </div>
                </div>
               
    )
}