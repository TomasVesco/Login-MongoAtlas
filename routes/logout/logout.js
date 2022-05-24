import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try{

        const name = req.session.name;

        res.status(200).render('logout', { name });

        req.session.destroy();

    }catch(err){
        console.log(err);
    }
});

export default router;