const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params;
    res.send(`kita sedang melihat berita ${ judul }`);
})

app.get('/blog/:category/:judul/:author', (req, res) => {
    const { category, judul, author } = req.params;
    res.send(`kita sedang melihat berita ${ category } ${ judul } ${ author }`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>data hilanggt</h1>`)
    }
    res.send(`<h1> search keyword: ${ q } </h1>`);
})

app.get('/cats', (req, res) => {
    res.send('Meow!');
})

app.post('/cats', (req, res) => {
    res.send('yesss');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

// app.get(/.*/, (req, res) => {
//     res.send('404');
// });

app.use((req, res) => {
    res.send('404');
})

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});