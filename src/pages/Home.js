import React, { Component }from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';


class Home extends Component {

  // state = {
  //   posts: []
  // }

  /*
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ 
          posts: res.data.slice(0,10)
        })
      })
  }
  */

  render() {
    // const posts = this.state.posts.map(post => {
    //   return (
    //     <div key={post.id}>
    //       <div>Title: {post.title }</div>
    //       <div>Content: {post.body}</div>
    //     </div>
    //   )
    // })

    // const posts = this.props.posts;
    const { posts } = this.props;
    // console.log(this.props)

    const postList = posts ? (
      posts.map(post => {
        return (
              <div className="post card" key={post.id}>
                <img src={Pokeball} alt="A pokeball" />
                <div className="card-content">
                  <Link to={`/${post.id}`}>
                    <span className="card-title red-text">Title: {post.title}</span>
                  </Link>
                  <p>{post.body}</p>
                </div>
              </div>
            )
      })
    ) : (<div className="center"> No posts yet...</div>)

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)
