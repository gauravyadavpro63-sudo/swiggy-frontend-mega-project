import { fooddata } from "../utils/fooddata"
import FoodCard from "./foodcard"


function FoodOption(){
    return(
        <>
         <h1 className="md:mt-32 mt-15 md:text-3xl text-xl font-bold md:ml-41 ml-20">Order our best food options</h1>
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