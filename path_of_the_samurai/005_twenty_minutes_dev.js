// StackOverflow help with favicon - https://stackoverflow.com/questions/39552736/set-favicon-in-http-server

const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

let requestsCount = 0;
const favicon = path.join(__dirname, "resources", "icons", "favicon.ico");

const server = http.createServer((request, response) => {
  const pathname = url.parse(request.url).pathname;
  if (request.method === "GET" && pathname === "/favicon.ico") {
    response.setHeader("Content-Type", "image/x-icon");
    fs.createReadStream(favicon).pipe(response);
    return;
  }
  requestsCount++;
  switch (request.url) {
    case "/students":
      response.write("STUDENTS");
      break;
    case "/":
    case "/courses":
      response.write("FRONT + BACK");
      break;
    default:
      response.write("404 not found");
  }
  response.write(" IT-KAMASUTRA: " + requestsCount);
  response.end();
});

server.listen(3003);