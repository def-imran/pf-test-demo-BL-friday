
const http = require("node:http");

const products = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Monitor", price: 249 },
  { id: 3, name: "Keyboard", price: 79 }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    return res.end(JSON.stringify({
      message: "Black Friday Test Shop"
    }));
  }

  if (req.url === "/products") {
    return res.end(JSON.stringify(products));
  }

  if (req.url.startsWith("/products/")) {
    const id = Number(req.url.split("/")[2]);
    const product = products.find(p => p.id === id);

    if (!product) {
      res.writeHead(404);
      return res.end(JSON.stringify({ error: "Not found" }));
    }

    return res.end(JSON.stringify(product));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
