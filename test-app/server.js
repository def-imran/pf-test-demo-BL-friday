const http = require("node:http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Test app is running\n");
});

server.listen(port, () => {
  console.log(`Test app listening on http://localhost:${port}`);
});
