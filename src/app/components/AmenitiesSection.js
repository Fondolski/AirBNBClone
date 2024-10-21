export default function AmenitiesSection({newArrayAmenities, dummyArray}) {
    return(
        <div className="p-1 max-w-xl">
            <h1 className="font-semibold">Amenities</h1>
            <div className="w-full flex flex-wrap ">
                {newArrayAmenities.map((item, i)=> {
                    return(
                        <div key={i} className="m-2">{dummyArray[0].info.amenities.data[item].title}</div>
                    )
                })}
            </div>
        </div>
    )
}