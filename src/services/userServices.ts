import UserRepository from '@repositories/userRepository';

const userRepository = new UserRepository();

class UserService {
  async getAllUsers() {
    try {
      return await userRepository.getUsers();
    } catch (error) {
      throw new Error('Impossible de récupérer les utilisateurs');
    }
  }

  async addUser(userData: { username: string; birthday: Date }) {
    try {
      return await userRepository.createUser(userData);
    } catch (error) {
      throw new Error('Impossible de créer l\'utilisateur');
    }
  }
}

export default UserService;
