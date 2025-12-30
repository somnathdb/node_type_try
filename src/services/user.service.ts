import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositorys/user.repository";

export class userService{
    private userRepo = new userRepository()
    create(data:IUser){
        return this.userRepo.create(data)   
    }
}