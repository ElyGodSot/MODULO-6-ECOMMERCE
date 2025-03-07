import { useAuthContext } from "../../Hook/useAuthContext"
import HeadComp from "../../Components/HeadComp"
import { useEffect,useState } from "react"
import Altaproductos from "../../Components/AltaProductos/Altaproductos"
import { useItemsContext } from '../../Hook/useItemsContext';



const Secret = () => {
  const { userPayload } = useAuthContext() // consumimos el contexto
   const {product,setProduct}= useItemsContext()

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProduct(storedProducts);
  }, []);

  return (
    <>
    <HeadComp></HeadComp>
    <h1> Tipo de usuario 🧑‍🦰</h1>


    {
      userPayload?.role === 'ADMIN'
      ? <h2> Hola Admin! bienvenido a tu perfil 🫲</h2> // lo pueden reemplazar por una card
      : <h2> Hola Customer! bienvenido a tu perfil 🫲</h2> // lo pueden reemplazar por una card
    }
    { userPayload?.role === 'ADMIN' && 
    <>
    <h3> Saludos Admin 🫲</h3>
    <Altaproductos></Altaproductos>
    </> }
    { userPayload?.role === 'CUSTOMER' && <h3> Saludos Customer 🫲</h3> }


    <div className="product-cards">
  {Array.isArray(product) && product.length > 0 ? (
    product.map((prod) => (
      <div key={prod.id} className="card">
        <img src={prod.image} alt={prod.product_name} />
        <div className="card-body">
          <h3>{prod.product_name}</h3>
          <p>{prod.description}</p>
          <p>Price: ${prod.price}</p>
          <p>Category: {prod.category}</p>
          <p>Brand: {prod.brand}</p>
          <p>SKU: {prod.sku}</p>
        </div>
      </div>
    ))
  ) : (
    <p>No products available</p> // Mensaje si no hay productos
  )}
</div>
    




    </>

    
  )
}

export default Secret

/* <div className="product-cards">
      {product.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.product_name} />
          <div className="card-body">
            <h3>{product.product_name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>SKU: {product.sku}</p>
          </div>
        </div>
      ))}
    </div>*/
