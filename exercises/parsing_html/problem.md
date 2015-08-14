# Traversing the dom!

`cheerio` is a library that allows you to use a jQuery-like syntax right here in your terminal. If you know anything about jQuery this one should be easy for you.

# Overview
Let's start with a simple example. Say we want to get the 'h1' tag out of the following html:

```
<html>
  <body>
    <h1>There is no cow level.</h1>
  </body>
</html>
```

We can use `cheerio` to load the html like this:

```
var cheerio = require('cheerio')
var $ = cheerio.load('<html><body><h1>There is no cow level.</h1></body></html>')
```

Then, we can use the new `$` variable to query the html -- to get the `h1` tag, you can use `$('h1')`.

There are a variety of function you can use with the object you get: see `https://www.npmjs.com/package/cheerio`:

  * `$('h1').text()` will return `There is no cow level`.
  * `$('body').html()` will return `<h1>There is no cow level</h1>`

# Exercise

Go to the following link in your browser:

`http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/`

Take the file from the last tutorial. Use `got`, `cheerio`, and `console.log` to print out the **readable text** of the page using the `text()` function.

**hint: all of the content is in the `body` tag**
