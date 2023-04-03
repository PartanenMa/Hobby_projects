//Imports:
const express = require("express");
const{readFile} = require("fs");

//Creations:
const app = express();
const port = 8000;

//Uses:
app.use(express.static("Frontend"));

//Endpoints:
app.get("/", (request, response) => {
    if (request.url == "/" || request.url == "/cv.html") {
        readFile('./Frontend/cv.html', "utf8", (error, html) => {
            if (error) {
                response.status(404).send("404 Not found!");
            }else {
                response.status(200).send(html);
            }
            response.end();
        });
    }
    if (request.url == "/second" || request.url == "/lol.html") {
        readFile("./Frontend/lol.html", "utf8", (error, html) => {
            if (error) {
                response.status(404).send("404 Not found!");
            }else {
                response.status(200).send(html);
            }
            response.end();
        });
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error in server setup!");
    }    
    console.log("Server listening on port:", port);
    console.log("Front page: http://localhost:8000");
});