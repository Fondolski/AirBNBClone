
import {  MdArrowForwardIos} from "react-icons/md";



export default function DescriptionComponent({dummyArray, setOpenModal}) {
    return(
        <div className='mt-5 w-11/12 max-w-xl p-1'>
            <h1 className='line-clamp-3'>{dummyArray[0].info.description}</h1>
            <div className='mt-5 flex flex-row items-center cursor-pointer' onClick={()=> setOpenModal(true)}>
                <h1 className='font-semibold border-b border-black'>Read More</h1>
                <h1><MdArrowForwardIos/></h1>
            </div>
        </div>
    )
}