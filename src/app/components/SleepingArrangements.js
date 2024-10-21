export default function SleepingArrangements({dummyArray}) {
    return(
        <div className='p-1 mt-5'>
                   {dummyArray[0].info.sleepingArrangements.data.length > 0 ? 
                    <div>
                        <h1 className='font-semibold'>Where you'll sleep</h1>
                        <div className='flex flex-row mt-5 overflow-x-scroll scroll-smooth scrollbar-hide'>{dummyArray[0].info.sleepingArrangements.data.map((item)=> {
                            return(
                                <div className='border rounded-md cursor-pointer h-40 w-40 mx-2 flex flex-col items-center justify-center'>
                                    <MdSingleBed size={40}/>
                                    <p className='font-semibold'>{item.title}</p>
                                    <p>{item.subTitle}</p>
                                </div>
                            )
                        })}</div>
                    </div>: null}
                </div>
    )
}