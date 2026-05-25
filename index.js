import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 1000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
})

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/views/projects.html");
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})