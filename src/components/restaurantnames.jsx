import restaurantnamesdata from "../utils/restaurantnamesdata"
import RestaurantNamesCard from "./restaurantnamescard"




function RestaurantNames(){
    return(
        <>
         <h1 className="m-17 pl-8 text-3xl font-bold">Restaurant with online delivery in Lucknow</h1>
      <div className="flex flex-wrap justify-center gap-8 ">
        {
        restaurantnamesdata.map((value)=>{
              return(<RestaurantNamesCard key={value.id} value={value}/>)
        })
    }
      </div>
        
        </>
    )
}


export default RestaurantNames