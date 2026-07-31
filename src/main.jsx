import React from "react"
import ReactDOM from "react-dom/client";
import Home from "./components/home"
import RestaurantPage from "./components/restaurantpage";
import {BrowserRouter,Routes,Route,Link} from "react-router"
import RestaurantId from "./components/restaurantid";
import RestaurantNames from "./components/restaurantnames";
import  Search  from "./components/search";
import Cart from "./components/cart";
import store from "./store/store";
import {Provider} from "react-redux"




function Main(){
  
   return(
    <> 
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      |<Route path="/" element={<Home/>}></Route>
      <Route element={<Cart/>}>
      <Route path="/restaurant" element={<RestaurantNames/>}></Route>
      <Route path="/restaurant/menu" element={<RestaurantPage/>}></Route>
      <Route path="/restaurant/menu/search" element=  {<Search/>}></Route>
      <Route path="/restaurant/menu/:id" element={<RestaurantId/>}></Route>
       </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    

  </>
  )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);
