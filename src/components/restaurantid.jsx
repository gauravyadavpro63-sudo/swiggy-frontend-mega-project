
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Star } from "lucide-react"

function RestaurantId(){
  const [food,Setfood]=useState({})
  const {id}=useParams();
  useEffect(()=>{
  async function fetchdata(){
    const response=await fetch(`https://dummyjson.com/recipes/${id}`);
    const data =await response.json();
    Setfood(data);
  }
  
  fetchdata();
  },[])

    return(
        <>
       <div className="container max-w-[60%] mx-auto pt-10">
       <h1 className="font-bold text-3xl">{food.name}</h1>
       <div className="mt-10"><img  className="object-cover md:h-100 h-50 w-full rounded-2xl" src={food.image} alt="" /></div>
       <div className="flex"> <Star  className="w-6 h-6 text-green-500 fill-green-500"/> <span className="text-xl font-semibold">{food.rating} ₹{food.caloriesPerServing}</span></div>
       <div className="text-gray-400">{food.cuisine}</div>
       <div className="mt-10"><span className="font-semibold">Ingredients:</span>{food?.ingredients?.map((value)=>value+",")}</div>
       <div className="my-10" ><span className="font-semibold">Instructions:</span>{food.instructions}</div>


       <div>
        <h1 className="font-bold text-2xl">Disclamer</h1>
        <span>
          <ul className="list-disc">
            <li>All prices are set directly by the restaurant.</li>
            <li>All nutritional information is indicative, values are per serve as shared by the restaurant and may vary depending on the ingredients and portion size</li>
            <li>An average active adult requires 2,000 kcal energy per day, however, calorie needs may vary.</li>
          </ul>
        </span>
       </div>
                <div className=" my-10"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="img" /></div>

       </div>
       
        </>
    )
}


export default RestaurantId;