Say we wanted to put the table into a csv file. To output csv, we can use a format stream:

```js
var writer = require('format-data')('csv')
```
`writer` is now ready to accept rows to write.

You can now `write` each row, like so:

```
writer.write({ header1: value, header2: value })
```

And then, you can say where the data should go. In this case, we're writing to `process.stdout`:
```
writer.pipe(process.stdout)
```

You could also write to a file, like this:

```
var fs = require('fs')
var file = fs.createWriteStream('output.csv')
writer.pipe(file)
```

For this exercise, use `process.stdout` for testing.

# Exercise

Transform your file from the last exercise so that instead of `console.log`, it uses a `writer.write`.
