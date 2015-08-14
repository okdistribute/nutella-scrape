# The project

Our project is to get historical web data of the front page of the US Government's Education Department over the past 15 years. We want to do some analysis on how they changed the representation of their organization, but first we want to get the data.

So let's scrape it! We'll use archive.org as our base for retrieving the html.

# Overview

First, we need to know how to grab the contents of the webpage as html. Create a file called 'index.js'. You'll want to `require` the `got` module, like so:

```js
var got = require('got')
```

Then, you can use the `got` module to retrieve the contents of the webpage. `got` will go get the webpage, and when it's done, it'll call the function (err, html). `err` will be an error object (which we can check for, if we want) and `html` will have the page contents.


Here, we will just print the webpage `http://nodeschool.io`.

```js
var got = require('got')

got('http://nodeschool.io', function (err, html) {
  console.log(html)
})
```

Got it?

# Exercise

Let's look at ed.gov on September 10, 2003.

`https://web.archive.org/web/20030910064848/http://www.ed.gov/index.jhtml`

Use `got`, and `console.log` to print out the contents of the page.

