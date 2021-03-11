import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';


class Post extends Component {

  // state = {
  //   post: {}
  // }

  /*
  componentDidMount(){
    // console.log(this.props);
    let id = this.props.match.params.post_id;

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        this.setState({
          post: res.data
        })
      })

  } */

  handleClick = () => {
    this.props.deletePost(this.props.match.params.post_id);

    this.props.history.push('/');
  }

  render() {

    console.log(this.props)

    const id = this.props.match.params.post_id;
    const findPost = this.props.posts.find(post => post.id === id)
    
    const post = findPost ? (
      <div className="post">
        <h4 className="center">{findPost.title}</h4>
        <p>{findPost.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    
    /*
    // const { post } = this.state;
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    ) */

    return (
      <div className="container"> 
        {post}
      </div>
    )
  }
}



// const mapStateToProps = (state, ownProps) => {
//   // posts: state.posts
//   let id = ownProps.match.params.post_id;
//   return {
//     post: state.posts.find(post => post.id === id)
//   }
// } 

const mapStateToProps = (state) => ({
  posts: state.posts
})

/*
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({ type: 'DELETE_POST', id }) }
  }
}
*/

const mapDispatchToProps = (dispatch) => ({
  // deletePost: (id) => { dispatch({ type: 'DELETE_POST', id }) }
  deletePost: (id) => { dispatch(deletePost(id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
