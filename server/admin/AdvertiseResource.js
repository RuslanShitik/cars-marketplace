import {carsNavigation} from "./navigation.js";
import Advertise from "../models/Advertise.js";
import Color from "../models/Color.js";
import DrivingType from "../models/DrivingType.js";
import BodyType from "../models/BodyType.js";
import FuelType from "../models/FuelType.js";
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