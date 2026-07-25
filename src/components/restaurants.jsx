import { restaurantsdata } from "../utils/restaurantsdata"
import {RestaurantOption} from "./restaurantoption"

function Restaurants(){
    return(
        <>
        <h1 className="mt-32 text-3xl font-bold ml-41 mb-30">Order our best food options</h1>
        <div className="flex overflow-x-auto gap-4 container max-w-[80%] mx-auto">
        {
            restaurantsdata.map((value)=>{
                return(
               <RestaurantOption key={value.info.id} data={value}/>
                )
            })
        }


        </div>
        </>
    )
}


export default Restaurants;