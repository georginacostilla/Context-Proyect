import { useContext } from "react";
import { recipesProvider } from "../context/RecipesContext";

const EditRecipe = () => {

    const { title, setTitle, description, setDescription, ingredients, setIngredients } = useContext(recipesProvider);

    return (
        <>
        </>
    )
}

export default EditRecipe