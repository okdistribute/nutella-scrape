var got = require('got')
var cheerio = require('cheerio')

var URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'

got(URL, function (err, html) {
  var $ = cheerio.load(html)
  $('a').map(function (i, el) {
    console.log($(el).attr('href'))
  })
})
