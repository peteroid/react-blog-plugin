var React = require('react')
var Link = require('react-router').Link
var PropTypes = React.PropTypes

function Post (props, context) {
  getMarkupPostContent = function () {
    return {
      __html: props.post.content
    }
  }
  
  return (
    <div className="blog-post clearfix">
      <div className="blog-post-helper">
        <div className="blog-post-backbutton text-center" onClick={context.router.goBack}>
          <i className="fi-arrow-left"></i>
        </div>
      </div>
      <div className="blog-post-header row">
        <h2 className="row text-center blog-post-title">{props.post.title}</h2>
        <div className="row text-center">
          <img
            className="blog-post-author-img"
            src={props.post.author.image.url.replace('s35-c', 's100-c')} />
          <div className="blog-post-author-name" >{props.post.author.displayName}</div>
          <div className="blog-post-published-date">{new Date(props.post.published).toLocaleDateString()}</div>
        </div>
      </div>
      <div
        className="row blog-post-content"
        dangerouslySetInnerHTML={getMarkupPostContent()} />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

Post.contextTypes = {
  router: PropTypes.object.isRequired
}

module.exports = Post