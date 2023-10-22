import { Model } from "../models/index.js";
import {carsNavigation} from "./navigation.js";


const ModelResource = {
    resource: Model,
    options: {
        navigation: carsNavigation,
    }
}

export default ModelResource