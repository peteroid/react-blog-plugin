var React = require('react')
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var hashHistory = ReactRouter.hashHistory

var Main = require('../components/Main')

var PostListContainer = require('../containers/PostListContainer')
var PostContainer = require('../containers/PostContainer')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PostListContainer} />
      <Route path='post/:postID' component={PostContainer} />
    </Route>
  </Router>
)

module.exports = routes