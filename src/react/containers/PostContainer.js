var React = require('react')
var Post = require('../components/Post')
var bloggerHelpers = require('../utils/bloggerHelpers')

var PostContainer = React.createClass({
  getInitialState: function () {
    return {
      post: {},
      isLoading: true
    }
  },
  componentDidMount: function () {
    bloggerHelpers
      .getPost(this.props.params.postID)
      .then(function (res) {
        this.setState({
          post: res.data,
          isLoading: false
        })
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
  },
  render: function() {
    return (
      this.state.isLoading
      ? <h2 className="text-center"> Loading </h2>
      : <Post post={this.state.post} />
    )
  }
})

module.exports = PostContainer