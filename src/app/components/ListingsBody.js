import dummyData from "@/assets/dummyData";
import DetailsContainer from "./DetailsContainer";
import Image from 'next/image';
import MapComponent from "./MapComponent";

export default function ListingsBody({pageType}) {

    return(
        
        <div className="w-full h-full items-center bg-white z-20 justify-center border-t z-20 mt-10 flex flex-wrap ">
            {
            dummyData.data.map((item, i)=> {
                return(
                    

                    <DetailsContainer key={i} item={item} />
                )
            })}</div>
            
    )
}