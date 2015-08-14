Say we wanted to put the table into a csv file. To output csv, we can use a format stream:

```js
var formatData = require('format-data')
var writer = formatData('csv')

// write the data
writer.write({header1: value, header2: value})
// etc..

// specify where the data goes:
writer.pipe(process.stdout)
```

`writer` is now ready to accept rows to write, and will output them as `csv` when asked to write them out. Finally, it outputs to `stdout` with a `pipe` (works like unix pipes!):

You could also write to a file, like this:

```
var fs = require('fs')
var file = fs.writeFileStream('output.csv')

writer.pipe(file)
```

But right now, we're just going to use `process.stdout` for testing.

# Exercise

Transform your file from the last exercise so that instead of `console.log`, it uses a `writer.write`.
