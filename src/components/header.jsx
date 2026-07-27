import { Link } from "react-router";

function Header(){
    return(
            <header className="bg-[#ff5200]">
        <div className="flex justify-between container mx-auto py-8 max-w-[90%]">
         <img className="h-14 w-41 "src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
          <div className="flex font-serif text-white text-xl gap-9 items-center">
          <a href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
          <a className="border border-white rounded-2xl px-3 py-3" href="">Get the app</a>
          <a className="border border-black rounded-2xl px-3 py-3 bg-black" href="">Sign in</a>
          </div>    
        </div>

        <div className="pt-4 pb-9 relative">
            <img className="h-96 w-44 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <img className="h-74 w-46 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
            <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto flex text-center leading-relaxed">
                Order food for your kuchu puchu  Today!!!</div>
            <div className="continer max-w-[70%] mx-auto flex justify-center gap-9 m-10" >
                <input className="bg-white rounded-md p-3 w-[40%]"  placeholder="Enter your delivery location"type="text" />
                <input className="bg-white rounded-md p-3 w-[40%]" placeholder="Search for restaurant items or more"type="text" />
            </div>
        </div>
       
        <div className="flex justify-around container max-w-[80%] mx-auto">
           <Link to="./restaurant"><img className="h-80 w-80 object-cover"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" /></Link> 
          <img className=" object-cover h-80 w-80"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
            <img className="object-cover h-80 w-80"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
        </div>


        </header>
    )
}

export default Header;