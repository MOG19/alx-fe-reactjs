import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchedRecipe = data.find((r) => r.id === parseInt(recipeId));
    if (fetchedRecipe) {
      setRecipe(fetchedRecipe);
    }
  }, [recipeId]);

  if (!recipe) {
    return <div className="text-center py-10">Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
          <p className="mb-4">{recipe.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
