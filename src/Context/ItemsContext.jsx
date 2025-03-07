import { createContext, useState, useEffect } from "react";
import items from "../Utils/Api.json"
import { useLocation } from "react-router-dom";

const ItemsContext = createContext ();

function ItemsProvider ({children}){
    const [list, setList]=useState([]);
    const [loading, setLoading] = useState(true); 
    const [selectedItem, setSelectedItem] = useState({}); 
    const [search, setSearch] = useState('')
    const [carrito, SetCarrito]= useState([])
    const location = useLocation();
      const [product, setProduct] = useState({
        product_name: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        sku: '',
        image: '',
      });

   
    
    useEffect(() => {
      setLoading(true);
        setTimeout(() => {
          setList(items)
          setLoading(false) // cambia a false xk ya están cargando las canciones
        }, 2000)
      },[location])







      const data = {
        list,
        loading,
        selectedItem,
        setSelectedItem,
        search,
        setSearch,
        carrito,
        SetCarrito,
        product,
        setProduct
      }
      
    // el proveedor (provider) es un componente que envuelve a otros componentes
    // y le pasa un objeto con los datos que queremos compartir

    return (
        // return de un componente
    <ItemsContext.Provider value={data}>
      {children}
    </ItemsContext.Provider>
    )
}

export { ItemsContext, ItemsProvider }