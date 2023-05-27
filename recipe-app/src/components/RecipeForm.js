
import React, { useState, useEffect } from 'react';

function RecipeForm({ onAdd, onUpdate, editingRecipe }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title);
      setDescription(editingRecipe.description);
      setInstructions(editingRecipe.instructions);
    }
  }, [editingRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      id: editingRecipe ? editingRecipe.id : Date.now(),
      title,
      description,
      instructions,
    };

    if (editingRecipe) {
      onUpdate(recipe);
    } else {
      onAdd(recipe);
    }

    setTitle('');
    setDescription('');
    setInstructions('');
  };

  return (
    <div>
      <h2 className="sub-heading">{editingRecipe ? 'Edit Recipe' : 'Create Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className="form-label"  htmlFor="title">Title:</label>
          <input
          placeholder="Recipe"
          className="form-control"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label"  htmlFor="description">Description:</label>
          <textarea
          className="form-control"
          placeholder="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label"  htmlFor="instructions">Instructions:</label>
          <textarea
          placeholder="Ingredients"
          className="form-control"
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <button className="buttonadd"type="submit">{editingRecipe ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default RecipeForm;
