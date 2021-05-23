import React,{Component} from 'react'

class AddPhoto extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
   handleSubmit(event){
    event.preventDefault();    
    const link = event.target.elements.link.value
    const desc = event.target.elements.description.value
    const post = {
      id:Number(new Date()),description:desc,imageLink:link
    }

    if(link && desc){
      console.log(post)
      this.props.addPost(post);
      this.props.onHistory.push('/');
    }
  }

  render(){
    return (
    <div>
      <h1>Add photo</h1>
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Link" name="link"/>
          <input type="text" placeholder="Description" name="description"/>
          <button className="button">Post</button>
        </form>
      </div>
    </div>
    )
  }
}

export default AddPhoto