
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './Routes/RoutesIndex'
import { ItemsProvider } from './Context/ItemsContext'

function App() {
  return(
    
    <BrowserRouter>
      <ItemsProvider>
      <RoutesIndex></RoutesIndex>
      </ItemsProvider>
    </BrowserRouter>
    
  )
}

export default App