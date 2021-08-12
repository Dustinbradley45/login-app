import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
const cors = require('cors');
const authRouter = require("./routes/authorization-route");

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();
app.use(helmet());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/login', authRouter);


app.listen(PORT, () => console.log(`Server Running on ${PORT}`))



