import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PostsActions from '../../../store/actions/posts'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    return <div>Post List</div>
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
