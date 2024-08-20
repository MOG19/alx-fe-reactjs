 // RecipeDetails component
 import { useRecipeStore } from './recipeStore';

 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

   return (
     <div>
       <h1>{recipe.title}</h1>
       <p>{recipe.description}</p>
       {/* Render EditRecipeForm and DeleteRecipeButton here */}

       {/* Render the EditRecipeForm for editing the recipe */}
       <EditRecipeForm recipe={recipe} />

     {/* Render the DeleteRecipeButton for deleting the recipe */}
      <DeleteRecipeButton recipeId={recipeId} />
     </div>
   );
 };

 export default RecipeDetails;