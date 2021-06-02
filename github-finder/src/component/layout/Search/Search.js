import React,{useContext,useState} from 'react'
import GitHubContext from '../../../ context/github/GitHubContext'

const Search = ({showClear,clearUser}) => {

  const gitHubcontext = useContext(GitHubContext)

  const [text,setText] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if(text===''){
      gitHubcontext.setAlert('Please enter value','light')
    }else{
      gitHubcontext.searchUser(text)
      setText('')
    }
  }

  //e.target.name receives the input element name. in this case 'text'
  // const onChange = e => this.setState({[e.target.name]:e.target.value})
  const onChange = e => setText(e.target.value)

  return(
      <div>
        <form className='form' onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
            />
            <input
              type='submit'
              value='Search'
              className='btn btn-dark btn-block'/>
        </form>
        {showClear &&  <button 
              className='btn btn-light btn-block'
              onClick={clearUser}>Clear</button>
        }
       
      </div>
  )

}

export default Search