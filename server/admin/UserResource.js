import User from "../models/User.js";

const UserResource = {
    resource: User,
    options: {
        navigation: {
            name: 'Users',
            icon: 'User',
        },

        listProperties: ['id', 'login', 'role','first_name', 'last_name', 'phone_number', 'email', 'is_verified', 'createdAt' ,'updatedAt'],
        filterProperties: ['id', 'login', 'role','first_name', 'last_name', 'phone_number', 'email', 'is_verified', 'createdAt' ,'updatedAt'],
        editProperties: ['login', 'role', 'first_name', 'last_name', 'phone_number', 'email', 'is_verified'],
        showProperties: ['id', 'role', 'password', 'login', 'first_name', 'last_name', 'phone_number', 'email', 'is_verified', 'createdAt' ,'updatedAt'],

        sort: {
            sortBy: 'updatedAt',
            direction: 'desc',
        },

        actions: {
            new: {
                isAccessible: false,
                isVisible: false,
            },
            edit: {
                isAccessible: false,
                isVisible: true,
            },
            delete: {
                isAccessible: false,
                isVisible: false,
            },
            bulkDelete: {
                isAccessible: false,
                isVisible: false,
            },
        },
    },
}

export default UserResource