var React = require('react')

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="blog-header text-center">Blog</h1>
        <div className="blog-wrapper clearfix">{this.props.children}</div>
      </div>
    )
  }
})

module.exports = Main