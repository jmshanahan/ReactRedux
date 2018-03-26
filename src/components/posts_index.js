import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts} from '../actions';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, post => {
        return ( <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
        {post.title}
        </Link>
        </li>
        );
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new"> 
            Add a Post
          </Link>
        </div>
        <h3>Posts Index</h3>
        <ul className="list-group">
        {this.renderPosts()}
        </ul>
      </div>
    )
  }
}
// Whenever we need to consume anything form application level state
// we always define our mapStateToProps function
function mapStateToProps(state){
  return {posts: state.posts}
}


//mapDispatchToProps alternative ie no need to use the bind functionality 
// that we did in the previous example. ie the weather example
//Refer to the weather example on github if you need to see it.
//We now have our actionCreator hooked up to our component
export default connect (mapStateToProps, { fetchPosts })(PostIndex);

