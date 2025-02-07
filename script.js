import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
    console.log('start listening on the port number' + port);
});
