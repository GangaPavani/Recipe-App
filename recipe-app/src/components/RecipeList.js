import React from 'react';

function RecipeList({ recipes, onEdit, onDelete }) {
  return (
    <div>
      <h2 className="sub-heading">Recipes</h2>
      {recipes.length === 0 ? (
        <p className="para">No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <span>{recipe.title}</span>
              <button className="buttonedit" onClick={() => onEdit(recipe.id)}>Edit</button>
              <button className="buttondelete" onClick={() => onDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
