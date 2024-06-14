import User from '@models/IUsers';

class UserRepository {
  async getUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error('Erreur interne du serveur');
    }
  }

  async createUser(userData: { username: string; birthday: Date }) {
    try {
      return await User.create(userData);
    } catch (error) {
      throw new Error('Erreur interne du serveur');
    }
  }
}

export default UserRepository;
