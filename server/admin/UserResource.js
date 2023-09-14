import User from "../models/User.js";
import {userNavigation} from "./navigation.js";

const UserResource = {
    resource: User,
    options: {
        navigation: userNavigation,

        listProperties: ['_id', 'login', 'role','first_name', 'last_name', 'phone_number', 'email', 'is_verified', 'createdAt' ,'updatedAt'],
        filterProperties: ['_id', 'login', 'role','first_name', 'last_name', 'phone_number', 'email', 'is_verified', 'createdAt' ,'updatedAt'],
        editProperties: ['login', 'role', 'first_name', 'last_name', 'phone_number', 'email', 'is_verified'],
        showProperties: ['_id', 'role', 'password', 'login', 'first_name', 'last_name', 'phone_number', 'email', 'is_verified', 'createdAt' ,'updatedAt'],

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