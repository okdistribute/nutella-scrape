var got = require('got')

var URL = 'https://web.archive.org/web/20030910064848/http://www.ed.gov/index.jhtml'
got(URL, function (err, html) {
  console.log(html)
})