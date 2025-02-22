import HeadComp from "../../Components/HeadComp"
import MultipleCardComp from "../../Components/MultipleCardComp"
import DetailCardComp from "../../Components/DetailCardComp"
import { ItemsProvider } from "../../Context/ItemsContext"
import { useItemsContext } from "../../Hook/useItemsContext"

const Home = () => {
  const {loading} = useItemsContext()
  return (
    <ItemsProvider>

{loading ? (
          <h1>cargando pagina</h1>
        ) : (
          <>


    <div className="HomePadre">

        <div className="HomeHead">
            <HeadComp></HeadComp>
        </div>
       
        <div className="HomeCards">
            <MultipleCardComp></MultipleCardComp>
        </div>
    </div>
    </>)}

    </ItemsProvider>



  )
}

export default Home
