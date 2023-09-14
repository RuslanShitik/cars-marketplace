import UserService from "../services/UserService.js";

class UserController {
    async registration (req, res, next) {
        try {
            const {email, login, password, phone_number, first_name} = req.body
            const newUser = await UserService.registration(email, login, password, phone_number, first_name)
            res.json(newUser)
        }
        catch (e) {
            next(e)
        }
    }
}

export default new UserController