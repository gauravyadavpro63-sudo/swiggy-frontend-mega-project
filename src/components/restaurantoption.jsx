
function RestaurantOption({data}){
return(

   
    <div className="flex relative  rounded-t-2xl">
  <img className="h-48 min-w-80  rounded-t-2xl "src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${data.info.mediaFiles[0].url}`} alt="img" />
  <div className="absolute bottom-0 w-full h-20 bg-linear-to-t from-black via-black/50 to-transparent"></div>
    <p className="absolute bottom-0 left-0 text-white">{data.info.name}</p>
    <p className="absolute bottom-0 right-0 text-white">{data.info.rating.value}</p>
    
    </div>
    
)
}


export {RestaurantOption}