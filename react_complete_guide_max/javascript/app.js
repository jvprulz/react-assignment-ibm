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

/* ----------------------- Remove consecutive duplicates in string -------------------------*/

const removeConsecutiveDuplicates = (str) => {
    let newstr = "";
    let strlen = str.length;
    
    if (strlen == 0)
        return str;
    for (let i = 0; i < strlen - 1; i++) {
        if (s[i] != s[i + 1]) {
            newstr += str[i];
        }
    }
    
    newstr += str[strlen-1];
    return newstr;
}

/* ----------------------- Remove consecutive duplicates in square matrix -------------------------*/

const matrixDifference = (arr, n) => {
    let diag1 = 0, diag2 = 0;
     
    for (let i = 0; i < n; i++)
    {
        diag1 += arr[i][i];
        diag2 += arr[i][n-i-1];
    }

    return Math.abs(diag1 - diag2);
}
         