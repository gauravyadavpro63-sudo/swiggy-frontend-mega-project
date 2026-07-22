

function Header(){
    return(
            <header className="bg-[#ff5200]">
        <div className="flex justify-between container mx-auto py-8">
         <img className="h-12 w-44"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
          <div className="flex font-serif text-white text-2xl gap-9 items-center">
          <a href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
          <a className="border border-white rounded-2xl px-3 py-3" href="">Get the app</a>
          <a className="border border-black rounded-2xl px-3 py-3 bg-black" href="">Sign in</a>
          </div>    
        </div>

        <div className="pt-4 pb-9 relative">
            <img className="h-70 w-46 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <img className="h-74 w-46 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
            <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto flex text-center ">
                Order food discover best restaurant swiggy it!!</div>
            <div></div>
        </div>
       
        <div></div>


        </header>
    )
}

export default Header;