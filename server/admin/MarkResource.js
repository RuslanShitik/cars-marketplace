import Mark from "../models/Mark.js";
import {carsNavigation} from "./navigation.js";

console.log('carsNavigation: ',carsNavigation)
const MarkResource = {
    resource: Mark,
    options: {
        navigation: carsNavigation,
    }
}

export default MarkResource