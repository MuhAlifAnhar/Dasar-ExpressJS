const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/cats', (req, res) => {
    res.send('Meow!');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get(/.*/, (req, res) => {
    res.send('404');
});

// app.use((req, res) => {
//     res.send('404');
// })

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});