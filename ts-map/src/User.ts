import faker from 'faker'
import {Mappable} from './CustomMap'

//On TypeScript is not recommend export default
export class User implements Mappable{
  name:string;
  location: {
    lat:number,
    lng:number
  };
  color:string

  constructor(){
    this.name = faker.name.firstName();
    this.location ={
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
    console.log(`name and lat and lng ${this.name} ${this.location.lat}`)
  }

  markerContent():string{
    return `User name is ${this.name}`
  }

}
