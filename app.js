const express = require('express')
var path = require("path");
const app = express()
const port = 8080

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})

//test batmandah