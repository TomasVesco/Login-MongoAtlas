import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try{

        res.status(200).render('session-expired');

    }catch(err){
        console.log(err);
    }
});

export default router;