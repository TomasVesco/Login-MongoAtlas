import jwt from 'jsonwebtoken';

import dotenv from 'dotenv/config';

const JWTauth = (req, res, next) => {

    const authHeader = req.session.TOKEN;

    if(!authHeader) {
        req.session.error = 'Not authorized';
        res.status(401).redirect('/api/error');
    } else {
        const TOKEN = authHeader.split(' ')[1];

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