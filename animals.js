const form = document.querySelector("form");
form.onsubmit = function (event) {
  event.preventDefault();
};

class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  haveTheSameOwner(animalToCompare) {
    return this.ownerName === animalToCompare.ownerName;
  }
}

const firstAnimal = new pet("Charlie", "Marco", "Dog", "Bulldog");
const secondAnimal = new pet("Felix", "Marco", "Cat", "Kohona");
const thirdAnimal = new pet("Thor", "Federico", "Dog", "Bassotto");

console.log(firstAnimal.haveTheSameOwner(secondAnimal));
console.log(firstAnimal.haveTheSameOwner(thirdAnimal));
