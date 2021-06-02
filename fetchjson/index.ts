import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/photos/1'

interface Todo {
  id:number,
  title:string,
  url:string
}

axios.get(url).then(response => {
  const todo = response.data as Todo

  const {id,title,url} = todo

  logConsole(id,title,url)

})

const logConsole = (id:number,title:string,url:string)=> {
  console.log(`The id is ${id} and title is ${title} and url is ${url}`)
}