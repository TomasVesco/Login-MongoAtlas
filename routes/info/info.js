import { Router } from 'express';

import { memoryUsage } from 'node:process';

const router = Router();

router.get('/', async (req, res) => {
    try{

        const args = process.argv.join(',').replaceAll(',',' ');
        const OS = process.platform;
        const exectPath = process.execPath;
        const nodeVersion = process.version;
        const UID = process.geteuid();
        const memoryUsageRSS = memoryUsage.rss();
        
        res.status(200).render('info', { args, OS, memoryUsageRSS, nodeVersion, UID, exectPath });

    }catch(err){
        console.log(err);
    }
});

export default router;