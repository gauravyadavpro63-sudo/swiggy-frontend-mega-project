import { restaurantsdata } from "../utils/restaurantsdata"
import {RestaurantOption} from "./restaurantoption"

function Restaurants(){
    return(
        <div>
        <h1 className="md:mt-32 md:text-3xl font-bold md:ml-41 md:mb-30 mt-10 text-xl ml-20 mb-15">Our best Restaurants</h1>
        <div className="flex overflow-x-auto gap-4 container  max-w-[80%] mx-auto">
        {
            restaurantsdata.map((value)=>{
                return(
               <RestaurantOption key={value.info.id} data={value}/>
                )
            })
        }

        </div>
         <div className="container max-w-[80%] mx-auto my-10"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="img" /></div>
         
        </div>
        
    )
}


export default Restaurants;