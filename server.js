import express from 'express';

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to my blog');
})

app.listen(8000, () => {
    console.log('Listening on PORT 8000');
})

