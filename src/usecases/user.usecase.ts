import { User, UserCreate, UserRepository } from "../interfaces/users.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUsecase {
    private userRepository: UserRepository
    constructor(){
        this.userRepository = new UserRepositoryPrisma
    }

    async create({name, email}: UserCreate): Promise<User>{
        const verifyIfUserExists = await this.userRepository.findByEmail(email);
        if(verifyIfUserExists){
            throw new Error('User already exists')
        }
        const result = await this.userRepository.create({email, name});

        return result;
    }
}

export { UserUsecase };