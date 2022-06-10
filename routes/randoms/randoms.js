import { Router } from 'express';
import { fork } from 'child_process';

const forked = fork('child.js');

const router = Router();

router.get('/:cant?', async (req, res) => {
    try{

        const cant = req.query.cant || 100000;

        forked.send( cant );

        forked.on('message', ( finishProcess ) => {
            finishProcess = finishProcess.join(',').replaceAll(',',' - ');
            res.status(200).render('random', { finishProcess });
        });

    }catch(err){
        console.log(err);
    }
});

export default router;