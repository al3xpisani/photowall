const logging = (a:number,b:number):number => {
  return a+b
}

//Destructuring with annotations
const todaysWeather={
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date,weather}: {date:Date,weather:string}):void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)