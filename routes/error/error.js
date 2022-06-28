import e, { Router } from 'express';

import log4js from '../../config/logger/log4js.js';

const router = Router();

router.get('/', async (req, res) => {
    try{

        const error = req.session.error;

        const loggerError = log4js.getLogger('error');
        const loggerConsole = log4js.getLogger('default');

        loggerError.error(error);
        loggerConsole.error(error);

        res.status(200).render('error', { error });

    }catch(err){
        console.log(err);
    }
});

export default router;