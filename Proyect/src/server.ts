import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import db from '../models';
dotenv.config();

const app = express();
const host = process.env.DB_HOST || "localhost";
const port = process.env.NODE_PORT || 3600;

app.use(cors());
app.use(express.json());

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`We're up and running! -> http://${host}:${port}`);
    })
});