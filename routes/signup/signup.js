import { Router } from 'express';

import { LocalStorage } from "node-localstorage"

import jwt from 'jsonwebtoken';

import { MongoAtlasSignup } from '../../services/signup/signupAtlas.js';

const localStorage = new LocalStorage('./scratch');
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
            localStorage.setItem('TOKEN', `${name} ${TOKEN}`);
            res.status(200).redirect('/api/login');
        }

    }catch(err){
        console.log(err);
    }
});

export default router;