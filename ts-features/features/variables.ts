const id: number = 1

const title: string = 'Course'

const isReal: boolean = true

const nothing:void=null

const nullValue:null=null

const undefValue:undefined=undefined

//Objects
const date:Date=new Date()

//Arrays
let cars: string[] = ['MOnza','fusca']
let carNumbers: number[] = [1,2,3,4]
let hasName:boolean[] = [true,false,true]

class Car{

}
let car: Car = new Car

//Object literal
let vector: {x:number,y:number,normal:boolean} = {
  x: 100,
  y: 200,
  normal: true
}

//Function
//ts you need to declare type indicating
//what kind of parametes will be passed and
//what kind of return

//log number has index:number and the
//function returns void (no return)
const logNumber:(index:number)=> void = (index:number) => {
  console.log(index)
}


let coordinate = '{"x":100,"y":300}'
const conversion:{x:number,y:string} = JSON.parse(coordinate)


let numbers = [-1,2,-3,4]
let numbersAboveZero: boolean | number = false;

for (let i=0;i<numbers.length;i++){
  if(numbers[i]>0){
    numbersAboveZero = numbers[i];
  }else{
    numbersAboveZero = true
  }
}