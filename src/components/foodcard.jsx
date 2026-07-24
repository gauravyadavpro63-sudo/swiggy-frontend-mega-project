

function FoodCard({data}) {
    return(
        <div className="min-w-44">
            <img className="h-44 w-44"src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`} alt="img" />
        </div>
    )
}
export default FoodCard;