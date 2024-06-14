import Container, { Service } from 'typedi';
import userRepository from '../repositories/userRepository';
import UserRepository from '../repositories/userRepository';

@Service()
class UserService{
    constructor(private readonly userRepository: userRepository){
        this.userRepository = Container.get(UserRepository);
    }

    async getUsers(){
        try {
            return await this.userRepository.getUsers();
        } catch (error) {
            throw new Error('Internal server error');
        }
    }
}

export default UserService;
