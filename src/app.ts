import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// @ts-ignore
import router from './routes/router';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server is running `http://localhost:3000`');
});