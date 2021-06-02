import {Component,Fragment} from 'react'

interface User {
  name:string,
  age:number
}

interface UserSearchProps {
  users:User[]
}

interface UserSearchState {
  name:string,
  user: User | undefined
}

export class UserSearch extends Component<UserSearchProps>{

  state:UserSearchState = {
    name:'',
    user: undefined
  }

   changeMind = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  searchUser = () => {
    this.setState({name: ''})
    if(!this.state.name) return;
    else{
      const user = this.props.users.find(item=> item.name === this.state.name)
      this.setState({user})
      console.log(user)
    }
  }

  render(){
    const {name,user} = this.state
    return(
      <Fragment>
        <div>Search User Form</div>
        <input value={name} onChange={e=>this.setState({name:e.target.value})}/>
        <button onClick={this.searchUser}>Search User</button>
        <input onChange={e=>this.changeMind(e)}/>
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
}