import { useItemsContext } from "../../Hook/useItemsContext"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"



const DetailCardComp = () => {

    const {selectedItem, list}= useItemsContext()
    const {articulo, id}=useParams();
    const newarray= list.filter((elemento)=>{
      return elemento.id==id
    })

  return (
    <>
  
    <div>

    {newarray.map((elemento) => (
          <li key={elemento.id}>{elemento.id}</li>
        ))}

    <h4>{newarray.product_name}</h4>


    <h4>{selectedItem.product_name}</h4>
    <h5>{selectedItem.description}</h5>
    <h6>{selectedItem.price}</h6>

    <NavLink to={`/`}>cerrar</NavLink>

    </div>
     
  </>
  )
}


export default DetailCardComp

//<img src={selectedItem.imgage} alt={selectedItem.product_name} />