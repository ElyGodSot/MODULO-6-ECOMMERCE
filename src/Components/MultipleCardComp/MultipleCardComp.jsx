import { useItemsContext } from "../../Hook/useItemsContext"
import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';




const MultipleCardComp = () => {
    const { list, loading, setSelectedItem, search, selectedItem } = useItemsContext()


    const filteredItemsList = list.filter((item) => {
        return item.product_name.toLowerCase().includes(search.toLowerCase())
      })



  return (
    <section className='row-container'>
      {
            loading
              ? <h2>Cargando...</h2>
              : filteredItemsList.map((item) => (
                <article
                  key={item.id}
                  className='row-item'
                  onClick={() => {
                    setSelectedItem(item)
                    
                  }}
                >
                  <h3>{item.product_name}</h3>
                  <h3>{item.description}</h3>

                  <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title><NavLink to={`/articulo/${item.product_name}/${item.id}`}>más detalles</NavLink></Card.Title>
      
      </Card.Body>
    </Card>
                  
                </article>
              ))
        }


        
    </section>
)
}


export default MultipleCardComp

//<h1><NavLink to={'/'}>Ver especificacion</NavLink></h1>