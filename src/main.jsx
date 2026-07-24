import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/header"
import FoodOption from "./components/foodoption"





function Main(){
  
   return(
    <> 
     <Header/>
     <FoodOption/>
  </>
  )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);
