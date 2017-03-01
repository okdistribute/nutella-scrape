# Loops

Okay, now we want to get all of the links in the page. A link looks like this:

```html
<a href="http://some-other-url.com">Click me!</a>
```

If we want to select an `a` tag and get it's contents, we can do

```js
$('a').text()
```

This might select multiple tags, though, so we might need to go through each of them if you want to do something with them. Here's one way to go through each item:

```js
$('a').map(function (i, el) {
  // you can use either 'el' or 'this'
  $(this).text()
})
```

## Exercise

Now get this page "https://web.archive.org/web/20030910064848/http://www.ed.gov/index.jhtml"

Get all of the `a` elements on the page and `console.log` the `href` attribute. You can grab their `href` attribute using `attr`.

More info here: `https://github.com/cheeriojs/cheerio#attributes`


