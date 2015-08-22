Now, we will go through all of the links on the page and create a data table (csv file) out of it.

You might want to get a div of interest first, and then `find` items inside of it.

For example, let's get the `a` tag and the `date` in this html:

```html
<div class="title">
  <a href="http://nodeschool.io/#workshoppers">Workshoppers</a>
  <div class="date">
    Date: February 16, 2012
  </div>
</div>
```

Get the div:
```js
var div = $('div.title')
```

Use `find` to search the div (more on `find` here: https://github.com/cheeriojs/cheerio#traversing)

```js
var a = div.find('a')
var date = div.find('.date')
```

Now create the row:
```js
var row = {
  href: a.attr('href'),
  date: date.text()
}

console.log(row)
```

You'll need to use this technique in this exercise.

# Exercise

Let's get the top links on the "science" subreddit from February 16, 2012:

Go to `http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/` and look at the page source by right-clicking a link and clicking `Inspect Element`

Parse the html and create a row for each `a` link on the page. You'll need to use `map` and `console.log`.

Each row should include 3 fields: the visible `score`, the link's `href`, and `contents` (text contents of the `a` tag).

Example:
```
{"score": "15", "href": "/web/20120216223019/http://www.bbc.co.uk/news/science-environment-17015559", "content": "\'New frontier\' of Antarctic lake exploration - What\'s behind the drive to explore Antarctica\'s lakes?bbc.co.ukDrJulianBashircommentsharecancel"}
{"score": "3", "href": "/web/20120216223019/http://www.reddit.com/other-link-here", "content": "Some other link"}
```






