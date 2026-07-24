import { fooddata } from "../utils/fooddata"
import FoodCard from "./foodcard"


function FoodOption(){
    return(
        <>
         <h1 className="mt-32 text-3xl font-bold ml-41">Order our best food options</h1>
        <div className="flex flex-wrap justify-center p-15">
            {
               
       fooddata.map((value)=>{
           return(
            <FoodCard key={value.id} data={value}/>
           )
       })
        
            }       
        </div>
        </>
    )
}

export default FoodOption