import { User } from "../models/index.js";
import TokenService from "./TokenService.js";
import {UserDto} from "../dtos/UserDto.js";
import APIException from "../exceptions/apiExceptions.js";
import bcrypt from "bcrypt";
import {isRole} from "../helpers/role.js";

class UserService {
    async login() {

    }
    async verify() {

    }
    // переписать (обработка ошибок будет от ОРМ)
    async registration(email, login, password, phone_number, first_name) {
        const userByEmail = await User.findOne({email})
        if (userByEmail) {
            throw APIException.badRequest(`User with email '${email}' is exist`)
        }
        
        const userByLogin = await User.findOne({login})
        if (userByLogin) {
            throw APIException.badRequest(`User with login '${login}' is exist`)
        }

        const newUser = await User.create({email, login, password, phone_number, first_name})
        const userDto = new UserDto(newUser)
        const accessToken = TokenService.generateAccessToken({...userDto})

        return {
            accessToken,
            user: userDto
        }
    }
    async adminAuthenticate (email, password) {
        const userByEmail = await User.findOne({email})
        if (!userByEmail){
            return null
        }
        const isValidPassword = await bcrypt.compare(password, userByEmail.password)
        if (userByEmail && isValidPassword && isRole(['ADMIN', 'SUPER_USER'], userByEmail.role)) {
            return Promise.resolve(userByEmail)
        }
        return null
    }
    async update() {

    }
}

export default new UserService()