import {ShoppingCart} from "lucide-react"
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
function Cart(){
    const cartitems=useSelector((store)=>store.cartslice.counter)
    return(
        <>
      <div className=" h-[10vh] flex justify-between container max-w-[90%] mx-auto items-center mt-10 ">
       <img src= "https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="img" />
       <div className="text-green-600 flex" ><span><ShoppingCart className="h-9 w-9"/></span><span className="text-2xl">({cartitems})</span></div>
      </div>
      <Outlet/>
        </>
    )
}

export default Cart;