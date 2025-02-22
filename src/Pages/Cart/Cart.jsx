
import { ItemsProvider } from "../../Context/ItemsContext"
import HeadComp from "../../Components/HeadComp"
import CartComp from "../../Components/CartComp"
import MultipleCardComp from "../../Components/MultipleCardComp"
import './Cart.css'
import { useItemsContext } from "../../Hook/useItemsContext"


const Detail = () => {
  const {loading} = useItemsContext()
    return (
      
        <ItemsProvider>

{loading ? (
          <h1>cargando pagina</h1>
        ) : (
          <>

        <HeadComp></HeadComp>
        
        <div className="CartPage">
          <div className="first">
          <MultipleCardComp></MultipleCardComp>
          </div>

          <div className="second">
          <CartComp></CartComp>
          </div>
        </div>

</>
        )}
    </ItemsProvider>
    
      )
}

export default Detail