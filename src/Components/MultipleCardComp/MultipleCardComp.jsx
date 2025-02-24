import { useItemsContext } from "../../Hook/useItemsContext"
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MultipleCardComp.css'




const MultipleCardComp = () => {
    const { list, loading, setSelectedItem, search, selectedItem } = useItemsContext()


    const filteredItemsList = list.filter((item) => {
        return item.product_name.toLowerCase().includes(search.toLowerCase())
      })



  return (
    <section className='row-container'>
      {
            filteredItemsList.map((item) => (
                <article
                  key={item.id}
                  className='row-item'
                  onClick={() => {
                    setSelectedItem(item)
                    
                    
                    
                  }}
                >


                  <Card style={{ width: '11rem' }}>
      <Card.Img variant="top" src={item.image} style={{ width: '150px', height: 'auto'}}/>
      <Card.Body>
        <Card.Title>{item.product_name}</Card.Title>
        <Card.Text>
        <h4>$ {item.price}</h4>
        </Card.Text>
        <NavLink to={`/articulo/${item.product_name}/${item.id}`}>más detalles</NavLink>
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