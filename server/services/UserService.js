import User from "../models/User.js";
import TokenService from "./TokenService.js";
import {UserDto} from "../dtos/UserDto.js";
class UserService {
    async login() {

    }
    async verify() {

    }
    async registration(email, login, password, phone_number, first_name) {

        const userByEmail = await User.findOne({email})
        if (userByEmail) {
            throw new Error(`User with email '${email}' is exist`)
        }
        const userByLogin = await User.findOne({login})
        if (userByLogin) {
            throw new Error(`User with login '${login}' is exist`)
        }
        const newUser = await User.create({email, login, password, phone_number, first_name})
        const userDto = new UserDto(newUser)
        const accessToken = TokenService.generateAccessToken({...userDto})

        return {
            accessToken,
            user: userDto
        }
    }
    async create() {

    }
    async getById() {

    }
    async getAll() {

    }
    async update() {

    }
    async delete() {

    }
}

export default new UserService()