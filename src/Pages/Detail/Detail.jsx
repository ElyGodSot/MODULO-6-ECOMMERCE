import DetailCardComp from "../../Components/DetailCardComp"
import { ItemsProvider } from "../../Context/ItemsContext"
import HeadComp from "../../Components/HeadComp"
import MultipleCardComp from "../../Components/MultipleCardComp"
import './Detail.css'
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
        <div className="DetailPage">
          <div className="first">
          <MultipleCardComp></MultipleCardComp>
          </div>

          <div className="second">
          <DetailCardComp></DetailCardComp>
          </div>
        </div>
          </>)}
       
  
    </ItemsProvider>
    
      )
}

export default Detail

