
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './Routes/RoutesIndex'
import { ItemsProvider } from './Context/ItemsContext'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return(
    <AuthProvider>
    <BrowserRouter>
      <ItemsProvider>
      <RoutesIndex></RoutesIndex>
      </ItemsProvider>
    </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App