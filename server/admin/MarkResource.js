import { Mark } from "../models/index.js";
import {carsNavigation} from "./navigation.js";

const MarkResource = {
    resource: Mark,
    options: {
        navigation: carsNavigation,
    }
}

export default MarkResource