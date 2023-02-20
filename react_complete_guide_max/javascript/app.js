/* ----------------------- Classes -------------------------*/
class Human { 
  gender = "female";

  printGender = () => {
     console.log(this.gender);
  }
}
class Person extends Human{
  name = "Vinodh"
  
  printName = () => {
     console.log(this.name)
  }
}

const person = new Person();
person.printName();
person.printGender();

/* ----------------------- Spread Operator -------------------------*/
const array = [1, 2, 3, 5];
const newArray = [...array, 6];
console.log(newArray)

const obj1 = {
  name: "Kevin"
}

const newObj = {
  ...obj1,
  age: 25
}
console.log(newObj)

/* ----------------------- Rest Operator -------------------------*/

const filterElement = (...args) => {
  return args.filter(el => el > 1)
}

console.log(filterElement(1, 2, 3, 4, 0))

/* ----------------------- Destructuring -------------------------*/
const num = [1, 2, 3]
const [a, ,b] = num
console.log(a, b)

const obj = {name: "Kevin", age: 25}
const {name} = obj;
console.log(name)