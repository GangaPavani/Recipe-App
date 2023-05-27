import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './styles.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Load recipes from localStorage 
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    setRecipes(savedRecipes);
  }, []);

  // Save recipes to localStorage whenever the recipes state changes
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const updateRecipe = (recipe) => {
    const updatedRecipes = recipes.map((r) =>
      r.id === recipe.id ? recipe : r
    );
    setRecipes(updatedRecipes);
    setEditingRecipe(null);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    setEditingRecipe(null);
  };

  const editRecipe = (id) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    setEditingRecipe(recipeToEdit);
  };

  return (
    <div className="container">
      <h1 className="main-heading">Recipe Management System</h1>
      <div className="row">
        <div className="col">
          <RecipeList
            recipes={recipes}
            onEdit={editRecipe}
            onDelete={deleteRecipe}
          />
        </div>
        <div className="col">
          <RecipeForm
            onAdd={addRecipe}
            onUpdate={updateRecipe}
            editingRecipe={editingRecipe}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
