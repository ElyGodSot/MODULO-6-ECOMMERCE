import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Cart from "../Pages/Cart";

export default function RoutesIndex(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/articulo/:seleccion/:id' element={<Detail />}/>
            <Route path='/carrito' element={<Cart />}/>

        </Routes>
    )
}