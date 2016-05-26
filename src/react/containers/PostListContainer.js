var React = require('react')
var Link = require('react-router').Link
var PostListItem = require('../components/PostListItem')
var bloggerHelpers = require('../utils/bloggerHelpers')

var PostListContainer = React.createClass({
  getInitialState: function () {
    return {
      posts: [],
      isLoading: true
    }
  },
  componentDidMount: function () {
    bloggerHelpers.getPosts()
      .then(function (posts) {
        this.setState({
          posts: posts,
          isLoading: false
        })
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
  },
  render: function() {
    return this.state.isLoading
      ? <h2 className="text-center"> Loading </h2>
      : (
        <div className="">
          {this.state.posts.map(function (post, index) {
            var postPath = 'post/' + post.id
            return (
              <PostListItem key={index} post={post}/>
            )
          })}
        </div>
      )
  }
})

module.exports = PostListContainer