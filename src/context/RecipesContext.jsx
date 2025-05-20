import { createContext, useState, useEffect } from 'react'; //Para crear el contexto
import axios from 'axios'; //Para hacer peticiones a la API

export const recipesProvider = createContext(); //Creando el contexto, no olvidar exportarlo para usarlo en otros componentes.

const RecipesContext = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  return (
    <recipesProvider.Provider value={{ title, setTitle, description, setDescription, ingredients, setIngredients }}>
      {children}
    </recipesProvider.Provider>
  )
}

export default RecipesContext;
