import { Router } from 'express';

import jwt from 'jsonwebtoken';

import { MongoAtlasSignup } from '../../services/signup/signupAtlas.js';

const MongoAtlasSignupUser = new MongoAtlasSignup(); 

const router = Router();

router.get('/', async (req, res) => {
    try{

        res.status(200).render('signup');

    }catch(err){
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try{

        const { name, password } = req.body;
        const response = await MongoAtlasSignupUser.checkRepeat(name, password);

        if(response != 1){
            req.session.error = response;
            res.status(200).redirect('/api/error');
        } else {
            const TOKEN = jwt.sign({ name }, process.env.JWT_TOKEN);
            req.session.TOKEN = `${name} ${TOKEN}`;
            res.status(200).redirect('/api/login');
        }

    }catch(err){
        console.log(err);
    }
});

export default router;