export default function HostDetails({dummyArray}) {
    return(

        <div className='mt-5 p-1'>
            <div className='flex flex-row justify-between items-center max-w-xl'>
                <div className='font-semibold'>
                    {`Hosted by${dummyArray[0].info.host.name}`}
                </div>
                <div>
                    <div className=" flex border items-end w-12 h-12 rounded-full mx-1"  style={{backgroundImage: 'url(' + `${dummyArray[0].info.host.avatar.url}` + ')', backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', overflow: 'hidden'}}>
                    </div>
                </div>
            </div>
        </div>

    )
}