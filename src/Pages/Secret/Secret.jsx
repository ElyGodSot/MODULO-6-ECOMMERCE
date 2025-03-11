import { useAuthContext } from "../../Hook/useAuthContext"
import HeadComp from "../../Components/HeadComp"
import { useEffect,useState } from "react"
import Altaproductos from "../../Components/AltaProductos/Altaproductos"
import { useItemsContext } from '../../Hook/useItemsContext';
import { getMeUserService } from "../../Service/userService";



const Secret = () => {
  const { userPayload } = useAuthContext() 
   const {product,setProduct}= useItemsContext()
   const [userData, setUserData] = useState({}) 
  const token = localStorage.getItem('token')

 
  useEffect( () => {
    const fetchUserData = async () =>{
      try{
        const response = await getMeUserService(token)
        if(response.status === 200){
          setUserData(response.data)
        }
      }catch(error){
        console.log('Ocurrio un error en Dashboard', error)
      }
    } 
    fetchUserData()
  }, [token])

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProduct(storedProducts);
  }, []);

  return (
    <>
    <HeadComp></HeadComp>
    <h1> Mi perfil</h1>


   
    { userPayload?.role === 'ADMIN' && 
    <>
    <h3> Saludos Admin 🫲
    {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
      {userData?.gender && <p>Genero: {userData.gender}</p>}
      {userData?.role && <p>Rol: {userData.role}</p>}

        




    </h3>
    <h3>Dar producto de alta:</h3>
    <Altaproductos></Altaproductos>
    </> }
    { userPayload?.role === 'CUSTOMER' && <h3> 

        {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
      {userData?.gender && <p>Genero: {userData.gender}</p>}
      {userData?.role && <p>Rol: {userData.role}</p>}

       
    </h3> }


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
    <p>No mas funciones disponibles</p> // Mensaje si no hay productos
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
