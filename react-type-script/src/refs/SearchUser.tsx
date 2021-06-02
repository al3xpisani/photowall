import {useState,Fragment,useRef,useEffect} from 'react'

const SearchUser: React.FC = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(()=>{
    if(!inputRef.current) return;
    inputRef.current.focus()
  },[])

  const [name,setName] = useState('')
  const [user,setUser] = useState<{name:string,age:number} | undefined>();

  const searchUser = () => {
    setName('')
    if(!name) return;
    else{
      const foundUser = users.find(item=> item.name === name)
      setUser(foundUser)
      console.log(foundUser)
      if(!inputRef.current) return;
      inputRef.current.focus()

    }
  }

  const changeMind = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <Fragment>
      <div>Search User Form</div>
      <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={searchUser}>Search User</button>
      <input onChange={e=>changeMind(e)}/>
      {user &&
        <div>
          <div>Result</div>
          <h2>{user.name}</h2>
          <h3>{user.age}</h3>
        </div>
      }
    </Fragment>
  )
}

export default SearchUser