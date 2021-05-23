import React from 'react'
import Photo from './Photo'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

// class PhotoWall extends Component{
  // render(){
function PhotoWall(props){
  console.log(props.posts)
return (
      <div>
        <Link className="add-icon" to="/AddPhoto"> </Link>
  
        <div className="photo-grid">
            {props.posts.sort(
              function(x,y){
                return y.id -x.id
              }).map((post,index)=><Photo key={index} post={post} {...props} index={index} />)}
        </div>
      </div>
    )
  }
// }
PhotoWall.propTypes={
  posts: propTypes.array.isRequired
}

export default PhotoWall