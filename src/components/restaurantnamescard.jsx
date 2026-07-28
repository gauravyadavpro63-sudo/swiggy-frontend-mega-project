import { Star } from "lucide-react"
import { Link } from "react-router"

 function RestaurantNamesCard({value}){
    return(
        <>
        <Link to="/restaurant/menu">
         <div>
        <img className="h-43 min-w-76 object-cover rounded-2xl"src={value.image} alt="" />
        <div className="font-bold text-xl">{value.name}</div>
        <div className="flex ">
            <Star className="w-6 h-6 text-green-500 fill-green-500" />
        <span className="font-bold">{value.rating}  {value.timing} </span></div>
       
      </div>
      </Link>
        </>
    )
}

export default RestaurantNamesCard