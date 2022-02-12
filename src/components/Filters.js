import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {

  function handleChange(e) {
    onChangeType(e.target.value)
  }

  function handleFindPets() {
    onFindPetsClick('clicked')
  }

  
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={handleFindPets} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
