import { Service } from 'typedi';
import connectDB from '../config/db';


@Service()
class UserRepository{
    constructor(private readonly connection: any){
        this.connection = connection;
    }

    async getUsers(){
        try {
            return await this.connection.query('SELECT * FROM users');
        } catch (error) {
            throw new Error('Internal server error');
        }
    }
    
}

export default UserRepository;
