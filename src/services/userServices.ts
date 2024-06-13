import userRepository from '../repositories/userRepository';

const getUsers = async () => {
    return await userRepository.getAllUsers();
};

const createUser = async (userData: any) => {
    return await userRepository.createUser(userData);
};

export default { getUsers, createUser };
