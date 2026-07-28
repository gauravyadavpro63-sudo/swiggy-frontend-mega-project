
import { useParams } from "react-router";

function RestaurantId(){
  const {id}=useParams();
    return(
        <>
 <h1>  id is {id} </h1>
        </>
    )
}


export default RestaurantId;