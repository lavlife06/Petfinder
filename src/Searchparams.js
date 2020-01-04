import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
// ANIMALS is array coming from API @frontend... and parcel will automatic download API for us

const Searchparams = () => {
  // Here x is current state and setx is updater function
  const [loc, setloc] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // Animal, Breed is used for showing up text in Label, so of no use.
  // animal ,breed is the breed being choosed, for the first instant it is dog
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({ loc, breed, type: animal });
    setPets(animals || []);
  }
  // console.log(setBreed, setBreeds);
  // console.log("########");
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apibreeds }) => {
      const breedStrings = apibreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  // This will say that when to use useEffect, i.e when animal changes and setBreed ,setBreeds
  // console.log(setBreed, setBreeds);
  // useEffect will run after the rendering of the functions stuff, this will help in client to get some
  // information before using API etc....
  // const ChangeHandler = e => {
  //   setloc(e.target.value);
  //   // This will set and return the value inside input
  // };
  return (
    <div className="search-params">
      <h1>{loc}</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={loc}
            placeholder="Location"
            onChange={e => setloc(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropDown />
        {/* AnimalDropdown etc should be starting from Capital letter */}
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default Searchparams;
