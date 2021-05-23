import React,{Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'
import Single from './Single/Single'

class Main extends Component{
  render(){
   return( 
      <div>
        <Route exact path="/" render={()=> (
          <div>
            <Title title={"Photowall"}/>
            <PhotoWall {...this.props} />
          </div>)}/>
        
        <Route path="/AddPhoto" render={
          ({history})=>(
            <AddPhoto {...this.props} onHistory={history}/>
          )} />

        <Route path="/single/:id" render = {(params)=>(
          <Single {...this.props} {...params}/>
        )}/>
      </div>
   )
  }
}

function mapStateToProps(state){
  return {
    posts:state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))