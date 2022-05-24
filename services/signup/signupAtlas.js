import mongoose from 'mongoose';
import * as model from '../../config/Atlas/models.js';

export class MongoAtlasSignup {

    async getAll() {
        const dbAtlasRead = await model.usersAtlasDB.find({});
        return dbAtlasRead;
    }

    async checkRepeat( name, password ) {
        const dbAtlasUsers = await this.getAll();
        const checkRepeat = dbAtlasUsers.find(user => user.name === name);
        if(checkRepeat !== undefined){
            return 'User is already in use';
        } else {
            await model.usersAtlasDB.insertMany({name, password});
            return 1;
        }
    }

}