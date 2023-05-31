import { MdClose} from "react-icons/md";


export default function DescriptionModal({dummyArray, setOpenModal}) {
    return(
        <div className='border border-black flex flex-col items-center justify-center rounded-md w-11/12 bg-white fixed mt-20 p-5 max-w-5xl z-20 h-4/6 top-10 overflow-y-scroll'>
            <div className='flex flex-row items-center justify-between w-full'>
                <p className='font-semibold'>About this space</p>
                <div onClick={()=> setOpenModal(false)}>
                <p><MdClose size={20}/></p>
                </div>
            </div>
            <p className='mt-2'>{dummyArray[0].info.description}</p>
            
            </div>
    )
}