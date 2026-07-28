import { useEffect, useState } from "react";
import Restcard from "./restcard";
import ShimmerEffect from "./shimmereffect";


function RestaurantPage(){
    const [restdata,SetrestData]=useState([])
    useEffect(()=>{

         async function fetchdata(){
        const response= await fetch("https://dummyjson.com/recipes");
        const data= await response.json();
        SetrestData(data.recipes);
    }
    fetchdata();
    },[])

    if(restdata.length==0){
        return( <ShimmerEffect/>
        )
        }
   
    return(
        <>
        <h1 className="m-17 pl-8 text-3xl font-bold">Restaurant with online delivery in Lucknow</h1>
        <div className="flex flex-wrap justify-center gap-8 ">
        {
            restdata?.map((value)=>{
                return(
                <Restcard key={value.id} value={value}/>
                )
            })
        }

        </div>
        </>
    )
}
export default RestaurantPage;
