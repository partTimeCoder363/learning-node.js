const http = require("http");

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("Here is our history")
    }
    res.end(`<h1>Ooops!!!</h1> 
    <p>We can't find the page!!</p>
    <a href="/">Back Home</a>`)
});

    app.listen(5000);