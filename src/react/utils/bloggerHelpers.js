var axios = require('axios')
var API_KEY = 'YOUR_API_KEY'
var BLOG_ID = 'YOUR_BLOG_ID'

function getBlogDataUrl () {
  return 'https://www.googleapis.com/blogger/v3/blogs/' +
    BLOG_ID + '?key=' + API_KEY
}

function getPostDataUrl (postID) {
  return 'https://www.googleapis.com/blogger/v3/blogs/' +
    BLOG_ID + '/posts/' + postID + '?key=' + API_KEY
}

function getBlogData () {
  return axios.get(getBlogDataUrl())
}

function getPostsData (url) {
  return axios.get(url + '?key=' + API_KEY)
}

function getPostData (postID) {
  return axios.get(getPostDataUrl(postID))
}

var helpers = {
  getPosts: function () {
    return axios.all([getBlogData()])
      .then(function (data) {
      return axios.all([getPostsData(data[0].data.posts.selfLink)])
        .then(function (data) {
          return data[0].data.items
      }).catch(function (err) {
        console.warn(err)
      })
    }).catch(function (err) {
      console.warn(err)
    })
  },
  getPost: function (postID) {
    return getPostData(postID)
  }
}

module.exports = helpers