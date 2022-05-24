import { Router } from 'express';

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

        const response = await MongoAtlasSignupUser.checkRepeat(req.body.name, req.body.password);

        if(response != 1){
            req.session.error = response;
            res.status(200).redirect('/api/error');
        } else {
            res.status(200).redirect('/api/login');
        }

    }catch(err){
        console.log(err);
    }
});

export default router;