import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";

export default function RoutesIndex(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/articulo/:seleccion/:id' element={<Detail />}/>

        </Routes>
    )
}