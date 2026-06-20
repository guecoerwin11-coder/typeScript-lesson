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

//THE INTERFACE - ARRAY OF OBJECT -- define the object shape
interface User{ //set the data for object
  id: number,
  name: string,
  age: number,
  address: string
}

//extend the INTERFACE
interface Animal{
  name: string,
  gender: string
  age? : number //adding a question mark with indicate as an optional input
}

interface Dog extends Animal{
  breed: string,
  bark: () => void
}

const myPet: Dog = {
  name: "Blackie",
  gender: "Male",
  breed: "aspin",
  bark: () => console.log("woff")
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

//TYPE ALIAS - perfect using for roles (admin, customer)
type ID = string | number //union type
type Role = 'Admin' | 'Customer' | 'staff'


//TYPE OBJECT - same as interface but this type cannot be merge another type
type Cats = {
  name: string,
  age: number,
  breed: string
}


//Function TypeScript

//parameters and return type
function calcu(a: number, b: number): number {
  return a + b
}

//arrow funtion
const add = (a: number, b: number) : number  => a + b;

//void function
function messageType(textMsg: string): void{
  console.log(textMsg)
}

messageType('hello burikat')

//optional default parameters
function greetings(n: string, greet?: string): string{
  return `${greet || 'hello'}, ${n}`
}

console.log(greetings('erwin')) //hello erwin
console.log(greetings('erwin', "what's up")) //what's up, erwin

//default parameters
function client(name: string, role: string = 'admin') : object {
  return {name, role}
}
console.log(client('john')) //john admin
console.log(client('rona', 'customer')) //rona customer

//rest parameters
function takeSum(nums: number[]): number{
  return nums.reduce((total, n) => total + n, 0)
}

console.log(takeSum([1,2,4,6,3,7])) //23

//Async function
const fetchUser = async (id: number): Promise<Proponent> => {
  return  {id, name: "bob", email: "bob@sample.com", role: 'admin'}
}

const getUser = async (): Promise<Proponent[]> => {
  return []
}

interface Proponent{
  id: number,
  name: string,
  email: string,
  role?: string
}
console.log(fetchUser(21)) //output: Promise { {id: 21, name: "bob", email: "bob@sample.com", role: 'admin'}}

//generics functions
function getArray(arr: any[]): any{
  return arr[0]
}
const first = getArray([1,2,3]) //when it execute the ts doesn't know what is it

//solution for this generics
function getFirst<T>(arr: T[]): T{
  return arr[0]
  //T = is a place holder of ANY
  // type script now knew T from what you pass
}
const firstGet = getFirst([1,2,4,5]) //T = number
const secondGet = getFirst(['a', 'b', 'c']) //T = string
const thirdGet = getFirst([true, false, false]) //T = boolean