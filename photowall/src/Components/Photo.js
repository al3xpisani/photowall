import React from 'react'
import propType from 'prop-types'
import {Link} from 'react-router-dom'

// class Photo extends Component{
function Photo(props){
// render(){
    const post = props.post
    return(
      <figure className="figure">
        <Link to={`/single/${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description}/>
        </Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
          <button className="button" onClick={
            ()=>{
             props.startRemovingPost(props.index,post.id)
             props.history.push('/')
            } 
          } >Remove</button>
        </div>
      </figure>
    )
  }
// }

Photo.propType = {
  posts: propType.object.isRequired,
  onRemovePhoto: propType.func.isRequired
}

export default Photo