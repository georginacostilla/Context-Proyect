import { useContext } from "react";
import { recipesProvider } from '../context/RecipesContext';

const CreateRecipe = () => {

  const { title, setTitle, description, setDescription, ingredients, setIngredients } = useContext(recipesProvider);

  return (
    <>
    </>
  )
}

export default CreateRecipe