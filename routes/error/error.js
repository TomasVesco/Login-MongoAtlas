import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try{

        const error = req.session.error;
        res.status(200).render('error', { error });

    }catch(err){
        console.log(err);
    }
});

export default router;