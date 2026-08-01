import {X} from "lucide-react"

function Sidebar({open ,setopen}){
    return(
        <>
       
        <div className={` bg-white fixed right-0 top-0 h-screen w-[35%] transform transition-transform duration-500 ${open?" translate-x-0":"translate-x-full"}`}>
             <X onClick={()=>setopen(false)}/>
               
                <div className="container max-w-[80%] mx-auto mt-10 flex justify-between">
                <div>
                <span className="text-3xl font-bold">Login</span>
                <div className="mt-3 text-orange-600 font-semibold">or create an account</div>
                </div>
                <div><img className=" h-30 w-30 object-cover"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" /></div>
                </div>
                <div className="container max-w-[90%] mx-auto text-center  ">  <input  className="py-5 px-12 border my-12 w-89"type="number" placeholder="Enter your phone number"></input>
               <div><button className="bg-[#ff5200] py-5 px-10 w-89 text-white border ">LOG IN</button></div></div>
        </div>
        
        </>
    )
}


export default Sidebar