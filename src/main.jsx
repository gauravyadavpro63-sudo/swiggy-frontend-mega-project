import React from "react"
import ReactDOM from "react-dom/client";
import Home from "./components/home"
import RestaurantPage from "./components/restaurantpage";
import {BrowserRouter,Routes,Route,Link} from "react-router"





function Main(){
  
   return(
    <> 
    <BrowserRouter>
    <Routes>
      |<Route path="/" element={<Home/>}></Route>
      <Route path="/restaurant" element={<RestaurantPage/>}></Route>
    </Routes>
    </BrowserRouter>
    

  </>
  )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);
