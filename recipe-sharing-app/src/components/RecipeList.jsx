//  // RecipeList component
//  import { useRecipeStore } from './recipeStore';

//  const RecipeList = () => {
//    const recipes = useRecipeStore(state => state.recipes);

//    return (
//      <div>
//        {recipes.map(recipe => (
//          <div key={recipe.id}>
//            <h3>{recipe.title}</h3>
//            <p>{recipe.description}</p>
//          </div>
//        ))}
//      </div>
//    );
//  };

//  export default RecipeList;

import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const handleSearchChange = (e) => {
    filterRecipes(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search recipes..."
      />
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


["Link", "react-router-dom"]