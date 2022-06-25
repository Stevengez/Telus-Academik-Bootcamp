const express = require('express');
const app = express();

const bbChars = ['Walter White','Pinkman', 'Hank', 'Saul Goodman', 'Gus', 'Mike', 'Skyler'];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users/:name', (req, res) => {
    const charName = req.params.name;
    const index = bbChars.indexOf(charName);

    if(index !== -1){
        res.status(201).send(`${charName} belongs to BB series.`);
    }else{
        res.status(404).send(`${charName} doesn't belongs to BB series.`);
    }
});

app.post('/users/:name', (req, res) => {
    
});

app.put('/users/:name', (req, res) => {
    
});

app.delete('/users/:name', (req, res) => {
    
});

app.listen(3500, () => {
    console.log('Server listening on port 3500...');
});