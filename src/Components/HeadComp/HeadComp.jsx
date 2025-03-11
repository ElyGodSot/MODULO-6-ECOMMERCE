import { useItemsContext } from "../../Hook/useItemsContext"
import './HeadComp.css'
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../Hook/useAuthContext"
import { useLocation } from 'react-router-dom'; // Importar useLocation

const HeadComp = () => {
    const { list, setSearch } = useItemsContext()
    const {logout, isAuth} = useAuthContext();
    const location = useLocation(); // Obtener la ruta actual
    const linkIsActive = (isActive) => isActive ? "header__item-link header__item-link--is-active" : "header__item-link"
    

const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      const shouldShowSearch = !(location.pathname === '/login' || location.pathname === '/signup'|| location.pathname === '/secret');

      return (
        <>
          <div className='header__container'>
           
                <>
                    {/* Mostrar el input solo si no estamos en /login o /signup */}
                    {shouldShowSearch && (
                        <input
                            className='header__input-search'
                            type='search'
                            placeholder='Search an item...'
                            onChange={handleSearch}
                        />
                    )}
        


                  <nav className="header"> {/* BLOQUE */}
        <ul className="header__nav-list" />
        <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/">Home</NavLink>
        </li>
      
        {isAuth 
         ?(
          <>
           <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/secret">Mi perfil</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/carrito">Carrito</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink className="header__item-link" onClick={logout}>Logout</NavLink>
         </li>
          </>
         )
         : (
           <> 
        <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/login">Login</NavLink>
        </li>
        <li className="header__list-item">
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/signup">Signup</NavLink>
        </li>
           </>
         )}
      </nav>


    
                 
    
                  
                </>
            
          </div>
        </>
      )
    }

export default HeadComp