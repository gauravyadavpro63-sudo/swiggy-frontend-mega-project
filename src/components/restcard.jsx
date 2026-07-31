import { Link } from "react-router";
import { Star } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {firstadd,addition,subtraction} from "../store/myslice"



function Restcard({value}){
    const dispatch=useDispatch();
    const [addbutton,Setaddbutton]=useState(0);
  
    function Addfirst(){

        Setaddbutton(1);
        dispatch(firstadd(value))

    }
    function Addmore(){
        Setaddbutton(addbutton+1);
        dispatch(addition(value))
    }
   function Remove(){
    if(addbutton>1){
    Setaddbutton(addbutton-1);
    }
    else{
        Setaddbutton(0);
    }
    dispatch(subtraction(value));

   }








    return(
     
        <>
       
        <div className="flex justify-between my-5.5 ">
<div>
     <Link to={`/restaurant/menu/${value.id}`}>
        <div className="font-bold text-xl">{value.name}</div>
        <div className="font-bold text-xl">₹{value.caloriesPerServing}</div>
        <div className="flex ">
            <Star className="w-6 h-6 text-green-500 fill-green-500" />
        <span className="font-bold">{value.rating} </span></div>
        <div className="text-gray-400 text-m">{value.cuisine}</div>  
        <div className="max-w-[90%]">{value.instructions}</div>
       </Link>   
</div>

 <div className="relative max-h-40">
        <img className="h-40 min-w-70 object-cover rounded-2xl"src={value.image} alt="" />
      
        {addbutton?(<div className=" bg-white absolute left-22 -bottom-5 border rounded-2xl px-5 py-1 text-xl text-green-500 font-bold flex justify-between gap-2"><button onClick={()=>Remove()}>-</button><span>{addbutton}</span><button onClick={()=>Addmore()}>+</button></div>)
                  :(<button onClick={()=>Addfirst()} className="hover:bg-gray-300 bg-white absolute left-22 -bottom-5 border rounded-2xl px-5 py-1 text-xl text-green-500 font-bold">ADD</button>)}
     
     </div>
      </div>

        </>
    )
}
export default Restcard