import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PostsActions from '../../../store/actions/posts'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    const { posts } = this.props
    return (
      <div className={'ui relaxed divided list'}>
        {posts.map(post => (
          <div className={'item'} key={post.id}>
            <i className={'large middle aligned icon user'} />
            <div className={'content'}>
              <div className={'description'}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
