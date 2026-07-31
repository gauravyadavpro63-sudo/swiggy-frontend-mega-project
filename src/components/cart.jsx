import {ShoppingCart} from "lucide-react"
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
function Cart(){
    const cartitems=useSelector((store)=>store.cartslice.cart)
    return(
        <>
      <div className=" h-[10vh] flex justify-between container max-w-[90%] mx-auto items-center ">
       <img src= "https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="img" />
       <div className="text-green-600 flex" ><span><ShoppingCart /></span><span>({cartitems.length})</span></div>
      </div>
      <Outlet/>
        </>
    )
}

export default Cart;