

function FoodCard({data}) {
    return(
        <div className="md:min-w-44">
            <img className="md:h-44 md:w-44 h-20 w-20"src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`} alt="img" />
        </div>
    )
}
export default FoodCard;