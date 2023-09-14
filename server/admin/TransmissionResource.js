import Transmission from "../models/Transmission.js";
import {carsNavigation} from "./navigation.js";

const TransmissionResource = {
    resource: Transmission,
    options: {
        navigation: carsNavigation,
    }
}

export default TransmissionResource