import { Router } from 'express';

import { memoryUsage } from 'node:process';

// import benchmark from '../../benchmark.js';

const router = Router();

router.get('/', async (req, res) => {
    try{

        const args = process.argv.join(',').replaceAll(',',' ');
        const OS = process.platform;
        const exectPath = process.execPath;
        const nodeVersion = process.version;
        const UID = process.geteuid();
        const memoryUsageRSS = memoryUsage.rss();
        const dirname = process.cwd();

        // console.log('Corriendo y cargando los tests de autocannon, porfavor espere');
        // benchmark;
        
        res.status(200).render('info', { args, OS, memoryUsageRSS, nodeVersion, UID, exectPath, dirname });

    }catch(err){
        console.log(err);
    }
});

export default router;