
import { ItemsProvider } from "../../Context/ItemsContext"
import HeadComp from "../../Components/HeadComp"
import CartComp from "../../Components/CartComp"
import MultipleCardComp from "../../Components/MultipleCardComp"


const Detail = () => {
    return (
      
        <ItemsProvider>

        <HeadComp></HeadComp>
        <div className="CartPage">
          <div className="first">
          <MultipleCardComp></MultipleCardComp>
          </div>

          <div className="second">
          <CartComp></CartComp>
          </div>
        </div>

       
  
    </ItemsProvider>
    
      )
}

export default Detail