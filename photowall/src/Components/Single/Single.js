import React,{Component} from 'react'
import Photo from '../Photo'

import {Container} from './style'

class Single extends Component{

  render(){
    const {match,posts} = this.props;
    const id = Number(match.params.id);
    const post = posts.find((post)=>post.id===id);

    return (
      <Container>
        <Photo post={post} {...this.props}/>
      </Container>
    )
  }
}


export default Single