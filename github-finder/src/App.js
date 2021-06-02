import React,{Fragment,Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './component/layout/Navbar'
import Users from './component/layout/users/Users'
import User from './component/layout/users/User'
import Search from './component/layout/Search/Search'
import Alert from './component/layout/Alert'
import About from './component/pages/About'
import GitHubStateActions from './ context/github/GitHubStateActions'
import FetchData from './component/utils/FetchData'

class App extends Component{

  state={
    users:[],
    user:{},
    repos:[],
    loading:false,
  }

  componentDidMount(){
    this.setState({loading:true})
    //process.env global variables must be outside src folder
    FetchData('https://api.github.com/users',`?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`).then(
      data=>this.setState({
        users:data,
        loading:false
      })
    )
  }

  //commented to be used on GitHubStateActions
  // searchUser = (searchText)=> {
  //   this.setState({loading:true})
  //   this.postData('https://api.github.com/search/users',`?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`).then(
  //     data=>{
  //       // console.log('data.items',data)
  //       this.setState({
  //       users:data.items,
  //       loading:false
  //     })
  //     }
  //   )
  // }

  clearUser = () => this.setState({users:[],loading:false})

  getUser = (userName) => {
    this.setState({loading:true})
    this.postData('https://api.github.com/users',`/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`).then(
      data=>{
        // console.log('data.items',data)
        this.setState({
        user:data,
        loading:false
      })
      }
    )
  }

  getUserRepos = userName => {
    this.setState({loading:true})
    this.postData('https://api.github.com/users',`/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`).then(
      data=>{
        // console.log('data.items',data)
        this.setState({
        repos:data,
        loading:false
      })
      }
    )
  }
  // moved to context
  // setAlert = (msg,type) => {
  //   this.setState({alert: {msg,type}})
  //   setTimeout(()=>this.setState({alert:null}),5000)
  // }
  
  render(){
    const {users,loading,user,repos} = this.state
    // console.log(users)
    return (
      <GitHubStateActions>
        <Router>
          <div className="App">
              <Navbar/>
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' render={props=>(
                    // searchUser={this.searchUser} because its on context now
                    //setAlert={this.setAlert} removed and added on context
                      <Fragment>
                        <Search  clearUser={this.clearUser} showClear={users.length ===0 ? false : true} />
                        <Users loading={loading} users={users}/>
                      </Fragment>
                    )}
                  />
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/user/:login' render={props=> (
                    <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} loading={loading} />
                  )}/>
                </Switch>
              </div>
          </div>
        </Router>
      </GitHubStateActions>
    )
  }
}

export default App;
