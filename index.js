import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Render');
});

app.get('/test', (req, res) => {
    res.send('test page !!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});