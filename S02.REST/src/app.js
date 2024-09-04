import express from 'express';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
const app = express();


//Route: /Status
app.get('/status', (req, res) => {
    res.status(200).end();
});

app.get('/', (req, res) => {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<h1>Première route test </h1>');
});


app.get('/date', (req,res)=>{
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send(dayjs());
});
//Route : /math/somme
app.get('/math/:operation', (req, res) => {
    //endpoint : /math/somme
    res.status(200);
    res.set('content-type', 'text/plain');
    const operation = req.params.operation;
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    let resultat = 0;
    switch (operation) {
        case 'somme':
            resultat = a + b;
            break;
        case 'produit':
            resultat = a * b;
            break;
        case 'quotient':
            if(b!=0){
                resultat = a / b;
            }
            else{
                res.sendStatus(406).end();
                return;
            }
            break;
        case 'difference':
            resultat = a - b;
            break;
        case 'reste':
            resultat = a % b;
            break;
        default:
            res.sendStatus(404).end();
            return;
    }
    //with if/else
    // if(operation=='somme'){
    //     resultat = a+b;
    // }
    // else if(operation=='produit'){
    //     resultat = a*b;
    // }
    // else if(operation=='difference'){
    //     resultat = a-b;
    // }
    // else if(operation=='quotient'){
    //     resultat=a/b;
    // }
    // else if(operation=='reste'){
    //     resultat=a%b;
    // }

    res.send(`resultat: ${resultat}`);
});
//Route : /math/produit

export default app;