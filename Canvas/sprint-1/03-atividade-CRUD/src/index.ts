let nameList: string[] = [];

//Add Name
const addName = (name: string): void => {
  nameList.push(name);
};

//Get Name
const getName = (): void => {
  nameList.forEach((name) => console.log(name));
};

//Remove Name
const removeName = (index: number): void => {
  nameList.splice(index, 1);
};

//Update Name
const updateName = (index: number, name: string): void => {
  nameList.splice(index, 1, name);
};

//Add tree names
addName("Alex");
addName("Otávio");
addName("Roberto");

//remove name
removeName(1);

//edit list
updateName(1, "Osvaldo");

//list names
getName();
