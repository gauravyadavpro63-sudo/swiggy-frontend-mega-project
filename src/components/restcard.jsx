import { Link } from "react-router";
import { Star } from "lucide-react";


function Restcard({value}){
    return(
     
        <>
        <Link to={`/restaurant/menu/${value.id}`}>
        <div className="flex justify-between my-5.5 ">
<div>
        <div className="font-bold text-xl">{value.name}</div>
        <div className="font-bold text-xl">₹{value.caloriesPerServing}</div>
        <div className="flex ">
            <Star className="w-6 h-6 text-green-500 fill-green-500" />
        <span className="font-bold">{value.rating} </span></div>
        <div className="text-gray-400 text-m">{value.cuisine}</div>  
        <div className="max-w-[90%]">{value.instructions}</div>
</div>
 <div className="relative max-h-40">
        <img className="h-40 min-w-70 object-cover rounded-2xl"src={value.image} alt="" />
        <button className="hover:bg-gray-300 bg-white absolute left-22  -bottom-5 border rounded-2xl px-5 py-1 text-xl text-green-500 font-bold">ADD</button>
     </div>
      </div>

      </Link>
        </>
    )
}
export default Restcard