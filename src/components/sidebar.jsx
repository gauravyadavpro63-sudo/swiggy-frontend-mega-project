import {X} from "lucide-react"

function Sidebar({open ,setopen}){
    return(
        <>
       
        <div className={` bg-white fixed right-0 top-0 h-screen w-[35%] transform transition-transform duration-500 ${open?" translate-x-0":"translate-x-full"}`}>
             <X onClick={()=>setopen(false)}/>sidebar
        </div>
        
        </>
    )
}


export default Sidebar