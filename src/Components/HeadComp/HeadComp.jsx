import { useItemsContext } from "../../Hook/useItemsContext"

const HeadComp = () => {
    const { list, setSearch } = useItemsContext()

const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      return (
        <>
          <div className='header__container'>
            {
            list.length > 0
              ? (
                <>
                  <input
                    className='header__input-search'
                    type='search'
                    placeholder='Search an item...'
                    onChange={handleSearch}
                  />
    
                 
    
                  
                </>
                )
              : <h2>Cargando...</h2>
            }
          </div>
        </>
      )
    }

export default HeadComp