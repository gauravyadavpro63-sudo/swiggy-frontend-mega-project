import { useEffect, useState } from "react";
import Restcard from "./restcard";
import ShimmerEffect from "./shimmereffect";
import {ChevronDown,ChevronUp} from "lucide-react";
import {Link} from "react-router"

function RestaurantPage(){
    const [restdata,SetrestData]=useState([])
    const [curtain,UseCurtain]=useState(true);
    const [curtain2,UseCurtain2]=useState(true);
    const [prize,Setprize]=useState(null);
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


        const filterdata=restdata.filter((value)=>{
            if(prize==="low"){
               return value.caloriesPerServing<=300;
            }
            if(prize==="high"){
                return value.caloriesPerServing>300;
            }
            return true;
        })

    return(
        <>
        <div className=" mt-5 container max-w-[80%] mx-auto flex justify-between">
         <Link to="/restaurant/menu/search"><div><button className="border rounded-md p-1 bg-gray-200">Search</button></div></Link>
         <div className=" text-m " >sort by prize: <button onClick={()=>prize==="low"?Setprize(null):Setprize("low")} className={`mr-4 border rounded-2xl p-1 ${prize==="low"?"bg-green-300":"bg-gray-200"}`}>below ₹300</button>  
          <button className={`border rounded-2xl  ${prize==="high"?"bg-red-300":"bg-gray-200"} p-1`} onClick={()=>prize==="high"?Setprize(null):Setprize("high")}>above ₹300</button>
        </div>
        </div>
        <div className="flex justify-between m-17 container max-w-[80%] mx-auto  ">
            
            <h1 className=" text-3xl font-bold">Recommended</h1>
            <button onClick={()=>UseCurtain(!curtain)}>{curtain?<ChevronUp size={24}/>:<ChevronDown size={24}/>}</button>
        </div>
       
       {curtain&&(
        <div className="container max-w-[80%] mx-auto">
        {
            filterdata?.slice(0,15).map((value)=>{
                return(
                <Restcard key={value.id} value={value}/>
                )
            })
        }
        </div>)}










     <div className="flex justify-between m-17 container max-w-[80%] mx-auto  ">
            <h1 className=" text-3xl font-bold">More to Discover</h1>
            <button onClick={()=>UseCurtain2(!curtain2)}>{curtain2?<ChevronUp size={24}/>:<ChevronDown size={24}/>}</button>
        </div>
       {curtain2&&(
        <div className="container max-w-[80%] mx-auto">
        {
            filterdata?.slice(15,30).map((value)=>{
                return(
                <Restcard key={value.id} value={value}/>
                )
            })
        }
        </div>)}
        </>
    )
}


export default RestaurantPage;
