import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/header"
import FoodOption from "./components/foodoption"
import Restaurants from "./components/restaurants";





function Main(){
  
   return(
    <> 
     <Header/>
     <FoodOption/>
     <Restaurants/>
  </>
  )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);
