import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function selectAnimalType(type) {
    setFilters({ type: type })
  }

  function findPets() {
    fetch(`http://localhost:3001/pets`)
    .then(r => r.json())
    .then(pets => {
      if (filters.type !== "all") {
        const selectedPets = pets.filter(pet => pet.type === filters.type)
        setPets(selectedPets)
      }
      else {
        setPets(pets) 
      }
    })
  }

  function adoptPet(id) {
    const updatedPets = pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    })
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={selectAnimalType} onFindPetsClick={findPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={adoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
