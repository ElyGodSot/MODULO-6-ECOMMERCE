import { useItemsContext } from "../../Hook/useItemsContext"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

const CartComp = () => {
    const {list,carrito, SetCarrito}= useItemsContext()

    useEffect(()=>{
        let CarritoLocal2= JSON.parse(localStorage.getItem("carritolocal"))
        if (CarritoLocal2 && Array.isArray(CarritoLocal2))SetCarrito(CarritoLocal2)
        },[])

    useEffect(() => {
        if (carrito.length > 0) {
        localStorage.setItem("carritolocal", JSON.stringify(carrito))
        }
          }, [carrito])



        function eliminar(ideliminar){

            let carritofiltrado = carrito.filter((item,index)=>ideliminar!=index)
            SetCarrito(carritofiltrado)}
  

  return (
    <div>
        
    {carrito.map((elemento,index) => (

<ul style={{ listStyleType: 'none', padding: 0 }}>
<li key={elemento.id}>
<img src={elemento.image} alt={elemento.product_name} style={{ width: '200px', height: 'auto'}} />
<div style={{ marginTop: '20px' }}></div>{elemento.product_name}
<div style={{ marginBottom: '20px' }}>{elemento.price}</div>
<button onClick={()=>{eliminar(index)}}>Eliminar</button>
</li>
</ul>

))}

    
    <NavLink to={`/`}>cerrar</NavLink>
    

    </div>
  )
}

export default CartComp



//<button onClick={()=>{agregarcarrito(elemento)}}>comprar</button>

/*    useEffect(() => {
      if (carrito.length > 0) {
        localStorage.setItem("carritolocal", JSON.stringify(carrito))
      }
    }, [carrito])

function eliminar(ideliminar){

    let carritofiltrado = carrito.filter((item,indice)=>ideliminar!=item.id)
    setCarrito(carritofiltrado)
    */