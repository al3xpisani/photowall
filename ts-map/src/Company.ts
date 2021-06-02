import faker from 'faker'
import {Mappable} from './CustomMap'


export class Company implements Mappable{
  name: string;
  catchPhrase:string;
  location:{
    lat:number;
    lng:number;
  };
  color:string

  constructor(){
    this.name= faker.company.companyName()
    this.catchPhrase= faker.company.catchPhrase()
    this.location= {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

    //get error because location is undefined inside constructor
    // this.location.lat= parseFloat(faker.address.latitude())
  }

  markerContent():string{
    return `Company name is ${this.name}`
  }
}