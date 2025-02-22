import DetailCardComp from "../../Components/DetailCardComp"
import { ItemsProvider } from "../../Context/ItemsContext"
import HeadComp from "../../Components/HeadComp"
import MultipleCardComp from "../../Components/MultipleCardComp"
import './Detail.css'

const Detail = () => {
    return (
      
    <ItemsProvider>

        <HeadComp></HeadComp>
        <div className="DetailPage">
          <div className="first">
          <MultipleCardComp></MultipleCardComp>
          </div>

          <div className="second">
          <DetailCardComp></DetailCardComp>
          </div>
        </div>

       
  
    </ItemsProvider>
    
      )
}

export default Detail

