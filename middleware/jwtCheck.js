import jwt from 'jsonwebtoken';

import { LocalStorage } from "node-localstorage"

const localStorage = new LocalStorage('./scratch');

import dotenv from 'dotenv/config';

const JWTauth = (req, res, next) => {

    const localTOKEN = localStorage.getItem('TOKEN');

    if(!localTOKEN) {
        req.session.error = 'Not authorized';
        res.status(401).redirect('/api/error');
    } else {
        const TOKEN = localTOKEN.split(' ')[1];

        jwt.verify(TOKEN, process.env.JWT_TOKEN, (err) => {
            if(err) {
                req.session.error = 'Not authorized';
                res.status(403).redirect('/api/error');
            }
        });
        next();
    }
}

export default JWTauth;