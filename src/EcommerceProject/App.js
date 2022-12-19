import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Products from "./Products";
import Singleproduct from "./SingleProduct";

const App = () =>{
    return(

        <BrowserRouter >
        <Routes>
            <Route path = "/" element = {< Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/products" element = {< Products />} />
            <Route path = "/contact" element = {<Contact />} />
            <Route path = "/singleproduct / :id" element = {< Singleproduct />} />
            <Route path = "/cart" element = {< Cart />} />
            <Route path = "*" element = {< ErrorPage />} />
            
        </Routes>
        </BrowserRouter>
    )
}

export default App;