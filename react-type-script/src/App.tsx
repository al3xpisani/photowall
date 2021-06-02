import React from 'react';
import './App.css';
// import Parent from './props/Parent'
// import GuestList from './state/GuestList'
import SearchUser from './refs/SearchUser'

function App() {
  
  const users = [
    {
    name:'alex',
    age:20,},
    {
    name:'Robert',
    age:44,
    },
    {
    name:'Julius',
    age:5,
    }
  ]  

  return (
    <div className="App">
      <SearchUser />
    </div>
  );
}

export default App;
