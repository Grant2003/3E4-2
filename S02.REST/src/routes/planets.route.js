import PLANETS from '../data/planets.js';


import { application, Router } from 'express';

 const router = Router();

router.get('/planets' ,(req,res) =>{
    res.status(200);
    res.json(PLANETS);//Content-Type = application/json et envoi la réponse
});

router.post('/planets',(req,res)=>{
    res.status(405).end();
});

export default router;
