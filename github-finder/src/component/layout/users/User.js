import React,{Fragment,Component} from 'react'
import Spinner from '../Spinner/Spinner'
import Repos from '../../repos/Repos'
import {Link} from 'react-router-dom'

class User extends Component{

  componentDidMount(){
    // props.match.params reads the login parameter passed on the App.js->
    // <Route exact path='/users/:login'
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }

  render(){
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user

    const {loading, repos} = this.props

    if (loading) return <Spinner/>

    return(
    <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable: {' '}
        {hireable?<i className='fas fa-check text-sucess'/> : <i className='fas fa-check text-danger'/>}
        
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={avatar_url} className='round-img' alt=''style={{width:'150px'}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username: </strong>{login}</Fragment>}
              </li>

              <li>
                {company && <Fragment>
                  <strong>Company: </strong>{company}</Fragment>}
              </li>

              <li>
                {blog && <Fragment>
                  <strong>Website: </strong>{blog}</Fragment>}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-sucess'>Following: {following}</div>
          <div className='badge badge-light'>Public repos: {public_repos}</div>
          <div className='badge badge-dard'>Public Gists: {public_gists}</div>

        </div>
        <Repos repos={repos}/>
    </Fragment>
    )
  }
}

export default User