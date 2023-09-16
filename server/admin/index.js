import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';

import UserResource from "./UserResource.js";
import MarkResource from "./MarkResource.js";
import ModelResource from "./ModelResource.js";
import UserService from "../services/UserService.js";
import GenerationResource from "./GenerationResource.js";
import {
    AdvertiseResource,
    ColorResource,
    DrivingTypeResource,
    BodyTypeResource,
    FuelTypeResource,
    TransmissionTypeResource
} from "./AdvertiseResource.js";

const resources = [
    UserResource,
    MarkResource,
    ModelResource,
    GenerationResource,
    AdvertiseResource,
    ColorResource,
    DrivingTypeResource,
    BodyTypeResource,
    FuelTypeResource,
    TransmissionTypeResource
]

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
});

const admin = new AdminJS({ resources });

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
        authenticate: UserService.adminAuthenticate,
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
    },
    null,
    {
        resave: true,
        saveUninitialized: true,
        secret: 'sessionsecret',
        cookie: {
            httpOnly: process.env.NODE_ENV === 'production',
            secure: process.env.NODE_ENV === 'production',
        },
        name: 'adminjs',
    }
);

export { admin, adminRouter };