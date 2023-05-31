export default function PhotosSection({dummyArray, newArray}) {
    return(
        <div>
                    <div className='flex flex-row md:mt-5'>
                        <div className=" flex items-end w-full md:h-96 h-64 mx-1 md:rounded-l-2xl  md:w-7/12"  style={{backgroundImage: 'url(' + `${dummyArray[0].info.mainImage.url}` + ')', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', overflow: 'hidden'}}>
                        </div>
                        <div className='flex flex-wrap md:w-7/12 invisible absolute md:relative md:visible'>
                            {newArray.map((item, i)=> {
                                return(
                                    <div key={i}>
                                        {item === 2 || item === 4 ?
                                        <div> 
                                            { item === 2 ? 
                                            <div className=" flex border rounded-se-2xl items-end w-60 h-48 mx-1"  style={{backgroundImage: 'url(' + `${dummyArray[0].info.images.data[ Number(item) - 1].url}` + ')', backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat', overflow: 'hidden'}}>
                                            </div>:
                                            null}
                                            { item === 4 ? 
                                            <div className=" flex border rounded-ee-2xl items-end w-60 h-48 mx-1"  style={{backgroundImage: 'url(' + `${dummyArray[0].info.images.data[ Number(item) - 1].url}` + ')', backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat', overflow: 'hidden'}}>
                                            </div>:
                                            null}
                                        </div>
                                        : <div className=" flex border items-end w-60 h-48 mx-1"  style={{backgroundImage: 'url(' + `${dummyArray[0].info.images.data[ Number(item) - 1].url}` + ')', backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat', overflow: 'hidden'}}>
                                        </div>}
                                        
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
    )
}