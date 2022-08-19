"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fileRead = require('file-read-2');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3003;
app.get('/', (req, res) => {
    console.log(fileRead.fileRead());
    res.send({ message: fileRead.fileRead() });
});
app.listen(port, () => {
    return console.log(`Server is running on port: ${port}`);
});
