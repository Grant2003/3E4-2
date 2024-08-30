import express from 'express';
const app = express();


//Route: /Status
app.get('/status',(req,res)=>{
    res.status(200).end();
});

app.get('/', (req,res)=>{
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<h1>Première route test </h1>');
});

//Route : /math/somme
app.get('/math/somme', (req, res) => {
    //endpoint : /math/somme
    const a =8;
    const b =7;
    res.status(200);
    res.set('content-type', 'text/plain');
    res.send(`somme: ${a+b}`);
});
export default app;