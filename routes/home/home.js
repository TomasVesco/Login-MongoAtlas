import { Router } from 'express';

import dotenv from 'dotenv/config';
import JWTauth from '../../middleware/jwtCheck.js';

import sessionCheck from '../../middleware/sessionCheck.js';

const router = Router();

router.get('/', [sessionCheck, JWTauth], async (req, res) => {
    try{

        const userName = req.session.name;

        if(req.session !== undefined){
            res.status(200).render('home', { userName });
        } else {
            res.status(200).redirect('logout');
        }

    }catch(err){
        console.log(err);
    }
});


export default router;