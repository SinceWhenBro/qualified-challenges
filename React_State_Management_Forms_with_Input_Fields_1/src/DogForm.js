import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);

  const [breed, setBreed] = useState("");
  const handleBreedChange = (event) => setBreed(event.target.value);

  const [age, setAge] = useState("");
  const handleAgeChange = (event) => setAge(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, breed, age);
    setName("");
    setBreed("");
    setAge("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
        id="name"
        type="text"
        name="name"
        onChange={handleNameChange}
        value={name}
        />
        
      </label>
      <label htmlFor="breed">
        <input
        id="breed"
        type="text"
        name="breed"
        onChange={handleBreedChange}
        value={breed}
        />
        
      </label>
      <label htmlFor="age">
        <input
        id="age"
        type="text"
        name="age"
        onChange={handleAgeChange}
        value={age}
        />
        
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default DogForm;
