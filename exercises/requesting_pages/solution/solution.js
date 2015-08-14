var got = require('got')

var URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'
got(URL, function (err, html) {
  console.log(html)
})