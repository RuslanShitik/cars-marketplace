import { Generation } from "../models/index.js";
import {carsNavigation} from "./navigation.js";

const GenerationResource = {
    resource: Generation,
    options: {
        navigation: carsNavigation,
    }
}

export default GenerationResource