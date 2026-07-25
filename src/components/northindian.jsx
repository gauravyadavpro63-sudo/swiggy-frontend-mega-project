import { useEffect, useState } from "react"

export function NorthIndian(){
    const [resdata,Setresdata]=useState([]);

    useEffect(()=>{
    async function fetchdata(){
        const proxyserver="https://cors-anywhere.herokuapp.com/"
        const swiggyapi="https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4631&lng=80.3479&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        const response=await fetch(proxyserver+swiggyapi)
        const data=await response.json();
        Setresdata(data);
      
    }
     fetchdata();
    },[])
   
   
    return(
        <div className="flex flex-wrap justify-center gap-9">
            {
       resdata?.data?.cards.slice(3).map((value)=>{
        return(
          <div key={value.card.card.info.id }>
          <img className="h-48 min-w-80 "src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${value.card.card.info.cloudinaryImageId}`} alt="" />
          </div>        
        )       
        })
    }
        </div>
    )
}