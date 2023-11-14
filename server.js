const http = require("http");
const url = require("url");
const fs = require("fs");
const PORT = process.env.PORT;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  let q = url.parse(req.url, true);
  console.log("access to ", q.pathname);
  if (q.pathname == "/") {
    fs.readFile("index.html", function (err, html) {
      if (err) throw err;
      res.write(html);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}/`);
});
