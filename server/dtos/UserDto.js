export class UserDto {
    id;
    login;
    email;
    role;
    is_verified;
    first_name;
    last_name;

    constructor(model) {
        this.id = model._id;
        this.login = model.login;
        this.email = model.email;
        this.role = model.role;
        this.is_verified = model.is_verified;
        this.first_name = model.first_name;
        this.last_name = model.last_name;
    }
}