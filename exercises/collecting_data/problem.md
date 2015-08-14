# Output tabular data

Now, we will go through all of the links and write a row that contains the `href` and the `content`.

To get a few different items that are siblings inside of a div, you might want to get that div first, and then `find` items inside of it. For example,

```html
<div class="title">
  <a href="http://nodeschool.io/#workshoppers">Workshoppers</a>
  <div class="date">
    Date: February 16, 2012
  </div>
</div>
```

With `cheerio`, we can use `find` to search through the dom to find the items we want:

```js
var div = $('div.title')

var a = div.find('a')
var date = div.find('.date')

var row = {
  href: a.attr('href'),
  date: date.text()
}

console.log(row)
```

You'll need to use this technique to get the score and link data for each of the links on the reddit page. More on `find` here: https://github.com/cheeriojs/cheerio#traversing

# Exercise

Let's get the top links on the "science" subreddit from February 16, 2012:

Go to `http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/` and look at the page source by right-clicking a link and clicking `Inspect Element`

Parse the html to turn the visual table into a csv table, where each link is a row. You'll need to use `map`, and `console.log` each row.

Each row should include 3 fields: the visible `score`, the link's `href`, and `contents` (text contents of the `a` tag).

Example row:
```
{
  score":15",
  href:'/web/20120216223019/http://www.bbc.co.uk/news/science-environment-17015559',
  content:'\'New frontier\' of Antarctic lake exploration - What\'s behind the drive to explore Antarctica\'s lakes?bbc.co.ukDrJulianBashircommentsharecancel'
}
```






