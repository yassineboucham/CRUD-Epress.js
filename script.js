import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello Worlds");
});

app.listen(port, () => {
    console.log('start listening on the port number' + port);
});
