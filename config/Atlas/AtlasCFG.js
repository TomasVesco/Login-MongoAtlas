import mongoose from 'mongoose';

import {} from 'dotenv/config';

ATLAS();

async function ATLAS(){
    try{
        const URL = process.env.URL;
        await mongoose.connect(URL);
    }catch(err){
        console.log(err);
    }
}

export default ATLAS;