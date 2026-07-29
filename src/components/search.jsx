import { useState,useEffect } from "react";
import SearchData from "./searchdata"



function Search(){
   const [search,Setsearch]=useState("");
   const [rest,Setrest]=useState([]);

   useEffect(()=>{
    async function fetchdata(){
    const response=await fetch("https://dummyjson.com/recipes");
    const data= await response.json();
    Setrest(data.recipes);
    }
    fetchdata();
    

   },[search])


    return(
        <>
        <div className="container max-w-[60%] mx-auto flex justify-center my-20 ">
        <input onChange={(event)=>Setsearch(event.target.value)}placeholder="Search for your favourite food and drink" className="w-full border   text-xl font-semibold p-2 bg-gray-200"></input>
        </div>
        <div  className="container max-w-[80%] mx-auto">{
             rest.filter((value)=>value.name.toLowerCase().includes(search.toLowerCase())).map((value)=><SearchData key={value.id} value={value}/>)
            }
        </div>
        </>
    )
}

export  default Search;