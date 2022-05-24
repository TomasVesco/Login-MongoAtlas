import mongoose from 'mongoose';
import * as model from '../../config/Atlas/models.js';

export class MongoAtlasLogin {

    async getAll() {
        const dbAtlasRead = await model.usersAtlasDB.find({});
        return dbAtlasRead;
    }

    async checkCredentials( name, password ) {
        const dbAtlasUsers = await this.getAll();
        const userCheck = dbAtlasUsers.find(user => user.name === name && user.password === password);
        if(userCheck !== undefined){
            return 1;
        } else {
            return 'User or password are incorrect';
        }
    }

}