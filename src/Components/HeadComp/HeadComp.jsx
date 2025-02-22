import { useItemsContext } from "../../Hook/useItemsContext"
import './HeadComp.css'
import { NavLink } from "react-router-dom"

const HeadComp = () => {
    const { list, setSearch } = useItemsContext()

const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      return (
        <>
          <div className='header__container'>
           
                <>
                  <input
                    className='header__input-search'
                    type='search'
                    placeholder='Search an item...'
                    onChange={handleSearch}
                  />
                  <NavLink to={`/carrito`}>Carrito</NavLink>
    
                 
    
                  
                </>
            
          </div>
        </>
      )
    }

export default HeadComp