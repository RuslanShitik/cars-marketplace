import Model from "../models/Model.js";
import {carsNavigation} from "./navigation.js";


const ModelResource = {
    resource: Model,
    options: {
        navigation: carsNavigation,
    }
}

export default ModelResource