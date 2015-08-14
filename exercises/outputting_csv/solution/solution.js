var cheerio = require('cheerio')
var got = require('got')
var writer = require('format-data')('csv')

var URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'

got(URL, function (err, html) {
  $ = cheerio.load(html)
  $('.link').map(function (i, el) {
    el = $(el)
    var score = el.find('.score.unvoted')
    var a = el.find('a')
    var row = {
      score: score.text(),
      href: a.attr('href'),
      content: a.text()
    }
    writer.write(row)
  })
})

writer.pipe(process.stdout)