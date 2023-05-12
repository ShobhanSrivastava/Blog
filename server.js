import express from 'express';
import { PORT } from './config';

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to my blog');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
