import { useItemsContext } from "../../Hook/useItemsContext"
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MultipleCardComp.css'
import { useEffect } from "react";




const MultipleCardComp = () => {
    const { list, loading, setSelectedItem, search, selectedItem, product, setList,setProduct } = useItemsContext()

   
   
    useEffect(() => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProduct(storedProducts);
    }, []);

    /*useEffect(() => {
      if (product && Array.isArray(product)){
      let nuevoarray=[...list,...product]
      setList(nuevoarray) 
}}, []);





import React, { useState, useEffect } from 'react';

function Home() {
  const [productos, setProductos] = useState([]);

  // Cargar los productos iniciales
  useEffect(() => {
    fetch('/ruta-de-tu-api.json')
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;






*/




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

