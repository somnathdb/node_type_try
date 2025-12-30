"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const userServices = new user_service_1.userService();
class userController {
    static async userCreate(req, res) {
        try {
            let result = await userServices.create(req.body);
            res.status(201).json({ message: "User Created", data: result });
        }
        catch (err) {
            res.status(500).json({ message: "Internal Server Error", error: err });
        }
    }
}
exports.userController = userController;
