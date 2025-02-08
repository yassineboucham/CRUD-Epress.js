import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/show", (req, res) => {
    res.send(`
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>${req.body.user_name}</td>
                <td>${req.body.email}</td>
                <td>${req.body.comment}</td>
                </tr>
            </tbody>
        </table>
        `);
});

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
