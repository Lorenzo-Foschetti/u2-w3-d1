class user {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.loaction = _location;
  }

  whoIsOlder(userToCompare) {
    return this.age > userToCompare.age;
  }
}

const andreaRossi = new user("Andrea", "Rossi", 20, "Roma");
const marcoVerdi = new user("Marco", "Verdi", 25, "Torino");
const giuseppeVinci = new user("Giuseppe", "Vinci", 20, "Napoli");

console.log(andreaRossi.whoIsOlder(marcoVerdi));
console.log(marcoVerdi.whoIsOlder(giuseppeVinci));
