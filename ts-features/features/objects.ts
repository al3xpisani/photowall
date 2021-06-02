const profile ={
  name: 'alex',
  age:20,
  coords:{
    lat:0,
    lng:15
  },
  setAge(age:number):void {
    this.age=age
  },
  setCoords({lat,lng}:{lat:number,lng:number}):void {
    console.log(lat,lng)
  }
}

const {age}:{age:number} = profile;

const {coords: {lat,lng} }:{coords: {lat:number,lng:number }} = profile
