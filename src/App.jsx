import './App.css'
import Rutas from './components/routes/RoutesLanding'
import RecipesContext from './context/RecipesContext'
import UsersContext from './context/UsersContext'

function App() {
  return (
    <>
      <UsersContext>
        <RecipesContext>
          <Rutas />
        </RecipesContext>
      </UsersContext>
    </>
  )
}

export default App
