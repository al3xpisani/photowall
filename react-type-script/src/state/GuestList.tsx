import {useState} from 'react'

const GuestList: React.FC = () =>{

  const [name,setName] = useState('')
  const [guests,setGuests] = useState<string[]>([])

  
  const addGuest = () => {
    setName('')
    setGuests([...guests,name])
    console.log('guest added ',name)
  }

  return (
    <div>
      <h1>Guest List</h1>
      <ul>
        {guests.map(item=> <li key={item}>{item}</li>)}
      </ul>
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={addGuest}>Add Guest</button>
    </div>
  )
}

export default GuestList