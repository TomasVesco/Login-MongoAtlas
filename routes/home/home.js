import { Router } from 'express';

import JWTauth from '../../middleware/jwtCheck.js';
import sessionCheck from '../../middleware/sessionCheck.js';
import log4js from '../../config/logger/log4js.js';

const router = Router();

router.get('/', [sessionCheck, JWTauth], async (req, res) => {
    try{

        const userName = req.session.name;

        const loggerInfo = log4js.getLogger('info');
        const loggerConsole = log4js.getLogger('default');

        loggerInfo.info(`El usuario: [${userName}] se ha logeado`);
        loggerConsole.info(`El usuario: [${userName}] se ha logeado`);

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