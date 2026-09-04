const http = require("node:http")

const port = Number(process.env.PORT) || 3000

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify({ ok: true }))
    return
  }

  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" })
  res.end("ci-onboarding-ai-test\n")
})

server.listen(port, () => {
  console.log(`listening on ${port}`)
})
