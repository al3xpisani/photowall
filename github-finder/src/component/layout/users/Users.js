import React,{Component} from 'react'
import Useritem from './UserItem'
import Spinner from '../Spinner/Spinner'

import PropTypes from 'prop-types'

class Users extends Component{

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
  }

  render()
  {
    const {loading,users} = this.props
    
    if(loading) return <Spinner/>
    else
      return(
        <div style={userStyle}>
          {users.map(user=>
          <div key={user.id}> 
            <Useritem user={user}/>
          </div>
          )}
        </div>
      )
  }
}

const userStyle={
  display:'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap:'1rem'
}

export default Users