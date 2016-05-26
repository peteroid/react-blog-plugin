var React = require('react')
var Link = require('react-router').Link
var PropTypes = React.PropTypes

function PostListItem (props) {
  getMarkupPostContent = function () {
    return {
      __html: props.post.content
    }
  }

  getPostPath = function () {
    return "/post/" + props.post.id
  }

  return (
    <div className="blog-post clearfix">
      <div className="blog-post-header row">
        <div className="columns small-12 medium-4 text-center">
          <img
            className="blog-post-author-img"
            src={props.post.author.image.url.replace('s35-c', 's100-c')} />
          <div className="blog-post-author-name" >{props.post.author.displayName}</div>
          <div className="blog-post-published-date">{new Date(props.post.published).toLocaleDateString()}</div>
        </div>
        <Link to={{pathname: getPostPath()}}>
          <h2 className="columns small-12 medium-8 blog-post-title link">{props.post.title}</h2>
        </Link>
      </div>
      <div
        className="row blog-post-content list-item"
        dangerouslySetInnerHTML={getMarkupPostContent()} />
      <Link to={{pathname: getPostPath()}}>
        <div className="blog-post-content-border text-center">
          <i className="fi-eye blog-post-content-border-indicator"></i>
        </div>
      </Link>
    </div>
  )
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired
}

module.exports = PostListItem