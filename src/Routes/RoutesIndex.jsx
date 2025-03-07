import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Cart from "../Pages/Cart";
import { useAuthContext } from "../Hook/useAuthContext";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Secret from "../Pages/Secret";

export default function RoutesIndex(){
    const {isAuth} = useAuthContext()
    return(
        <Routes>


            <Route path='/' element={<Home />}/>
            <Route path='/articulo/:seleccion/:id' element={<Detail />}/>
            <Route path='/login' element={<Login />} />
            <Route 
            path='/carrito'
            element={
            isAuth
                ? <Cart />
                : <Login />
            } />
            <Route 
            path='/secret'
            element={
            isAuth
                ? <Secret />
                : <Login />
            } />
            <Route path='/signup' element={<Signup />} />

        </Routes>
    )
}