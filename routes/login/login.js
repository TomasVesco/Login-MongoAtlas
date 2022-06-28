import { Router } from 'express';

import { MongoAtlasLogin } from '../../services/login/loginAtlas.js';

const MongoAtlasLoginUser = new MongoAtlasLogin();

const router = Router();

router.get('/', async (req, res) => {
    try{

        res.status(200).render('login');

    }catch(err){
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    try{
        
        const { name, password } = req.body;

        const response = await MongoAtlasLoginUser.checkCredentials(name, password);

        if(response === 1){
            req.session.name = req.body.name;
            res.status(200).redirect('/api/home');
        } else {
            req.session.error = response;
            res.status(200).redirect('/api/error');
        }

    }catch(err){
        console.log(err);
    }
})

export default router;