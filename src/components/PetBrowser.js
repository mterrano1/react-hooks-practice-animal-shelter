import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  // console.log(pets)
  // console.log(onAdoptPet)

  const arrayOfPets = pets.map(pet => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ))

  return (
    <div className="ui cards">
      {arrayOfPets}
    </div>
  )
}

export default PetBrowser;
