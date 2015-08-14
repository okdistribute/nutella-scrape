var got = require('got')
var cheerio = require('cheerio')

var URL = 'https://web.archive.org/web/20030910064848/http://www.ed.gov/index.jhtml'

got(URL, function (err, html) {
  var $ = cheerio.load(html)
  var content = $('body')
  console.log(content.text())
})