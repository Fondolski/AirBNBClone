export default function RoomDetails({dummyArray}) {
    return (
        <div className='flex flex-row w-11/12 max-w-xl p-1'>
            {dummyArray[0].info.details.data.map((item)=> {
            return (
                <div className='flex flex-row items-center justify-center mr-2'>
                    <div>
                    {item.type}
                    </div>
                    <div className='text-sm ml-1'> {item.value}</div>
                </div>
            )
        })}</div>
    )
}