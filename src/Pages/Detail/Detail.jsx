import DetailCardComp from "../../Components/DetailCardComp"
import { ItemsProvider } from "../../Context/ItemsContext"
import HeadComp from "../../Components/HeadComp"
import MultipleCardComp from "../../Components/MultipleCardComp"

const Detail = () => {
    return (
      
    <ItemsProvider>
        
        <div>
          <HeadComp></HeadComp>
          <DetailCardComp></DetailCardComp>
          <MultipleCardComp></MultipleCardComp>
        </div>
  
    </ItemsProvider>
    
      )
}

export default Detail

