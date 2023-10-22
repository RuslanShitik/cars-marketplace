import {carsNavigation} from "./navigation.js";
import { Advertise } from "../models/index.js";
import { Color } from "../models/index.js";
import { DrivingType } from "../models/index.js";
import { BodyType } from "../models/index.js";
import { FuelType } from "../models/index.js";
import Transmission from "../models/TransmissionType.js";

const AdvertiseResource = {
    resource: Advertise,
    options: {
        navigation: carsNavigation,
    }
}
const ColorResource = {
    resource: Color,
    options: {
        navigation: carsNavigation,
    }
}
const DrivingTypeResource = {
    resource: DrivingType,
    options: {
        navigation: carsNavigation,
    }
}
const BodyTypeResource = {
    resource: BodyType,
    options: {
        navigation: carsNavigation,
    }
}
const FuelTypeResource = {
    resource: FuelType,
    options: {
        navigation: carsNavigation,
    }
}
const TransmissionTypeResource = {
    resource: Transmission,
    options: {
        navigation: carsNavigation,
    }
}

export {
    AdvertiseResource,
    ColorResource,
    DrivingTypeResource,
    BodyTypeResource,
    FuelTypeResource,
    TransmissionTypeResource,
}