"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repositorys/user.repository");
class userService {
    constructor() {
        this.userRepo = new user_repository_1.userRepository();
    }
    create(data) {
        return this.userRepo.create(data);
    }
}
exports.userService = userService;
