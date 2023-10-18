import { body } from 'express-validator';

export default [
    body('login')
        .notEmpty().withMessage('Login is required!')
        .isLength({ min: 4, max: 20 }).withMessage('Login must be between 4 and 20 characters!'),

    body('password')
        .notEmpty().withMessage('Password is required!')
        .isLength({ min: 4, max: 20 }).withMessage('Password must be between 6 and 50 characters!'),

    body('email')
        .notEmpty().withMessage('Email is required!')
        .isEmail().withMessage('Email is not valid!')
]
        