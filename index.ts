import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const fileRead = require('file-read-2');

dotenv.config();

const app: Express = express();

const port = 3003;

app.get('/', (req: Request, res: Response) => {
    console.log(fileRead.fileRead());
    res.send({message: fileRead.fileRead()});
});

app.listen(port, () => {
    return console.log(`Server is running on port: ${port}`);
})