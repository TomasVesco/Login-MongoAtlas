import mongoose from 'mongoose';
import * as model from '../../config/Atlas/models.js';

import bcrypt from 'bcrypt';

export class MongoAtlasLogin {
    async getAll() {
        const dbAtlasRead = await model.usersAtlasDB.find({});
        return dbAtlasRead;
    }
    async checkCredentials( name, password ) {
        const dbAtlasUsers = await this.getAll();
        const userCheck = dbAtlasUsers.find(user => user.name === name);
        if(userCheck != undefined){
            const match = await bcrypt.compare(password, userCheck.password);
            if(match){
                return 1;
            } else {
                return 'User or password are incorrect';
            }
        } else {
            return 'User or password are incorrect';
        }
    }
}