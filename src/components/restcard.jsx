import { Link } from "react-router";
import { Star } from "lucide-react";


function Restcard({value}){
    return(
     
        <>
        <Link to={`/restaurant/menu/${value.id}`}>
        <div>
        <img className="h-43 min-w-76 object-cover rounded-2xl"src={value.image} alt="" />
        <div className="font-bold text-xl">{value.name}</div>
        <div className="flex ">
            <Star className="w-6 h-6 text-green-500 fill-green-500" />
        <span className="font-bold">{value.rating}  {value.prepTimeMinutes} mins</span></div>
        <div className="text-gray-400 text-m">{value.cuisine}</div>  
      </div>
      </Link>
        </>
    )
}
export default Restcard