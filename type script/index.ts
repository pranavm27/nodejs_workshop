// bascic types 
let id: number = 5;
id = '5';
let company: string = 'test';
let isPublished: boolean = true;
let x:any = 'hello'

let ids:number[] = [1,2,3,4]
ids.push('worng');

let array:any[] =[1, true, 'test']

//tuple
let person: [number , string, boolean] = [1,'str', false]

//tuple array
let empoyee: [number , string][] ;
empoyee = [
    [1,'bruce'],[1,'bruce'],[1,'bruce']
]

//union
let pid: string | number
pid = 'str'
pid = 2

//Enum
enum Directions1{
    Up,
    //Up = 1
    Down,
    Left,
    Right
}

console.log(Directions1.Up)

enum Directions2{
    Up = 'up',
    //Up = 1
    Down = 'down',
    Left = 'left',
    Right = 'rigjt'
}

// Objects

const user: {
    id: number,
    name : string
} ={ 
    id :1 ,
    name : 'John'
}


type User = {id : number , name : string}

const User = { id : 123, name : 'shaji papan',}


// type assertion 
// explectily telling the compiler that treat a variable as a custome type

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;



// fumction
function AddNum(x: number ,y:number): number{
    return x+y
}
console.log(AddNum(1,2))


function log(message : string | number):void {
    console.log(message)
}
console.log(log('test'))
console.log(log(123132))

// Interfaces 
//very similar to object and custome variables 

interface UserInterface  {id : number , name : string, readonly age? : number}

const User1: UserInterface = { id : 123, name : 'shaji papan',}

type  Point = number | string  // unions dose not work with unions 
const p1 : Point = 1    //type  Point = number | string


interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number , y:number): number => {return x+y}
const sub: MathFunc = (x: number , y:number): number => {return x-y}
console.log(add)
console.log(sub)


// Classes
class Person {
    id : number
    name : string

    //public 
    //private 
    //protected accessiable in this class or extended classes
    constructor(id: number ,name : string) {
        console.log('constructor called ')
        this.id = id;
        this.name = name
    }

    register (){
        return `${this.name} is not registered `
    }
}
const brad = new Person()
const Alice = new Person (2, 'Alice')
console.log(Alice)

//-----------------------------------------------------
// Classes Interface 
interface PersonInterface  {id : number , name : string, register(): string}

class Person1 implements PersonInterface{
    id : number
    name : string

    //public 
    //private 
    //protected accessiable in this class or extended classes
    constructor(id: number ,name : string) {
        console.log('constructor called ')
        this.id = id;
        this.name = name
    }

    register (){
        // return 2134234 is error  
        return `${this.name} is not registered `
    }
}


// EXTEND A CALSS 

class Employee  extends Person {
    posistion : string

    constructor( id : number, name: string, position: string){
        super(id, name)
        this.posistion = position
    }
}

const emp1 = new Employee(3, 'shawn', 'developer')
console.log(emp1. name )
console.log(emp1.register())



//GEnerics

function getArray(item:any[]): any[]{
    return new Array().concat(item)
}
let numArray = getArray([1,2,3,4,5,6,7])
let StringArrau = getArray(['dog','cat','mouse'])

numArray.push('goat') // dose not thorw err


//add generics to it 
function getArray1<T>(item:T[]): T[]{
    return new Array().concat(item)
}
let numArray1 = getArray1<number>([1,2,3,4,5,6,7])
let StringArrau1 = getArray1<string >(['dog','cat','mouse'])

numArray1.push('goat')
StringArrau1.push(234)
//helps us to make resuable components 


// type inference 
// will show the error even if the type is not defined



//class that takes in a string time ; time zone and converts the time to the zone 


//ecomerse 
// class catagory extends class products 

// catagory be food , electornics , dress, shows etc 
// with functionalities to add new products and delete products update products and list all the products.
