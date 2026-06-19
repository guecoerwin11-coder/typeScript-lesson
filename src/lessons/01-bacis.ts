//the primative types (VARIABLES)

const firstName: string = 'Erwin' //string type;
const age: number = 25;     //number type
const isEnroll: boolean = true //boolean
const nothing: null = null; //ang null value ay sinasadya mo wala talaga sya na laman
const notDefined: undefined = undefined // ang undefined namna ayy basta ka lang nag declare ng variable


//the Inference this type script would automatically know what their type based on their value inputted
let nickname = 'apey';
let score = 20;

nickname = 'chong'; //type script still knew this is a string

//ANY type;  this type not always recommend to use so some programmer avoid this
let points: any = 'one hundred'
points = 100 //works
points = true //works
points = {} //works

//UNKNOWN type: better that use to ANY type
let isValid: unknown = 'Correct';

if(typeof isValid === "string"){
    console.log(isValid.toUpperCase()) //this would now run
}

// console.log(isValid.toUpperCase()) //get an error


// 5. VOID — function returns nothing
const logMessage = (msg: string): void => {
  console.log(msg)
  // no return value
}


// 6. NEVER — function never returns
const throwError = (message: string): never => {
  throw new Error(message)
  // never reaches end!
}

//Literal types - this type is used when a value is inside the literal type
let direction: 'north'| 'south' | 'east' | 'west';
direction = 'north'; //works 
//direction = 'up'  this get error typescript would say that the up is not in the direction


//THE TYPED ARRAYS 
const numbers: number[] = [1,2,3,4,5,6] //number arrays if we put a one string it would error
const names: string[] = ['erwin', 'apey', 'rona', 'dok']; // same as array number cannot insert a different data types

//THE INTERFACE - ARRAY OF OBJECT
interface User{ //set the data for object
  id: number,
  name: string,
  age: number,
  address: string
}
//call the interface User
const users: User[] = [
  { id: 34, name: 'erwin', age: 25, address: 'Sta. Lucia'},
  { id: 23, name: 'rona', age: 21, address: 'Capas'}
]

//loop each of the array object in the users variable
users.forEach(user => {
  console.log(user.name.toUpperCase)
})

//TUPLE - fix data cannot modify 

const bday: [string, number] = ['may 28', 2001];
const mathematics: [string, number] = ['pi', 3.14]

const [formula, numberformula] = mathematics;
//formula = 'pi',   numberFormula = 3.14, since it access the mathematics variables

//READONLY - cannot modify it only for viewing

const immutableData: readonly string[] = ['a', 'b', 'b']
//immutableData.push('d') cannot add it goes error  