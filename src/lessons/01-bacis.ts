//the primative types (VARIABLES)

const name: string = 'Erwin' //string type;
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
// ─────────────────────────────────

const logMessage = (msg: string): void => {
  console.log(msg)
  // no return value
}

// 6. NEVER — function never returns
// ─────────────────────────────────

const throwError = (message: string): never => {
  throw new Error(message)
  // never reaches end!
}