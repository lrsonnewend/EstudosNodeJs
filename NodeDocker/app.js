const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json([
        {
            "id": "1",
            "title": "Fausto I - Goethe"
        },
        {
            "id": "2",
            "title": "Paraíso Perdido - John Milton"
        },
        {
            "id": "3",
            "title": "Divina Comédia - Dante"
        },
    ])
});

app.listen(3000, () => {
    console.log('ouvindo na 3000');
});