# The project

First, we need to know how to grab the contents of the webpage as html. Create a file called 'index.js'. You can use the `got` module to easily retrieve the contents of the webpage. You'll want to `require` the `got` module, like so.

```js
var got = require('got')
```

`got` will go get the webpage, and when it's done, it will call the function (err, html). `err` will be an error object (which we can look at) and `html` will have the page contents.

Here is an example that prints the html from webpage `http://nodeschool.io`.

```js
var got = require('got')

got('http://nodeschool.io', function (err, html) {
  console.log(html)
})
```

# Exercise

Let's look at reddit.com's science subreddit in February, 2012.

`http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/`

Use `got`, and `console.log` to print out the contents of the page.

