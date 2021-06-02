
//does these fields name,year and broken matter to interface? nop.
//the only think matters is the summary function
interface Reportable {
  summary():string
 } 

 const oldCivic = {
  name: 'civic',
  year:2000,
  broken:true,
  summary():string {
    return `name ${this.name}`
  }
 } 

 //I can use a lot of objects to refer to the same Reportable interface.
 //Interface says the rules of the properties.
 const drink = {
   name:'coca',
   carbonated:true,
   sugar:40,
   summary():string {
     return `name of dring ${this.name}`
   }
 }

const printSummary = (item:Reportable):void => {
  console.log()
}

printSummary(oldCivic)
printSummary(drink)