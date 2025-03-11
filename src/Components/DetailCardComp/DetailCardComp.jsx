import { useItemsContext } from "../../Hook/useItemsContext"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuthContext } from "../../Hook/useAuthContext"
import { useNavigate } from 'react-router-dom';
import  './DetailCardComp.css'



const DetailCardComp = () => {

    const {selectedItem, list, carrito, SetCarrito}= useItemsContext()
    const {articulo, id}=useParams();
    const {logout, isAuth} = useAuthContext();
    const navigate = useNavigate();

    const newarray= list.filter((elemento)=>{
      return elemento.id==id

    
   
    })

 
    const irALogin = () => {
      navigate('/login');
    };

    


    useEffect(()=>{
    let CarritoLocal= JSON.parse(localStorage.getItem("carritolocal"))
    if (CarritoLocal && Array.isArray(CarritoLocal))SetCarrito(CarritoLocal)
    },[])


    useEffect(() => {
      if (carrito.length > 0) {
        localStorage.setItem("carritolocal", JSON.stringify(carrito))
      }
    }, [carrito])


    function agregarcarrito(articulo){
      let nuevocarrito = [...carrito]
      nuevocarrito.push(articulo)
      SetCarrito(nuevocarrito) 
}
     
  


   

   

  return (
    <div className="Detail">


    {newarray.map((elemento) => (

<ul style={{ listStyleType: 'none', padding: 0 }}>
<li key={elemento.id}>
<img src={elemento.image} alt={elemento.product_name} style={{ width: '200px', height: 'auto'}} />
<div style={{ marginTop: '20px' }}></div>{elemento.product_name}
<div style={{ marginBottom: '20px' }}>{elemento.description}</div>



{isAuth 
         ?(
          <button onClick={()=>{agregarcarrito(elemento)}}>comprar</button>
        )
        : (
          <> 
          <button onClick={irALogin}>Log in to buy</button>
          </>
         )}

<NavLink to={`/`}>cerrar</NavLink>




</li>
</ul>

))}

    
    
  

   
     
  </div>
  )
}


export default DetailCardComp
/* {newarray.map((elemento) => (

      
          <li key={elemento.id}>
          <img src={elemento.image} alt={selectedItem.product_name}/>
          {elemento.product_name}
          {elemento.id}
          <button onClick={()=>{agregarcarrito(elemento)}}>comprar</button>
          
          
          </li>

        ))}*/