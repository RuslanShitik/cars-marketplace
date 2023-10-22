import Model from "./Model.js";
import Mark from "./Mark.js";
import Generation from "./Generation.js";
import Advertise from "./Advertise.js";
import TransmissionType from "./TransmissionType.js";
import FuelType from "./FuelType.js";
import BodyType from "./BodyType.js";
import DrivingType from "./DrivingType.js";
import Color from "./Color.js";
import User from "./User.js";

Model.belongsTo(Mark, {foreignKey: 'markId'});
// Mark.hasMany(Model);

Generation.belongsTo(Model, {foreignKey: 'modelId'});
// Model.hasMany(Generation);

Advertise.belongsTo(Generation, { foreignKey: 'generationId' });
// Model.hasMany(Advertise);
Advertise.belongsTo(TransmissionType, { foreignKey: 'transmissionId' });
// TransmissionType.hasMany(Advertise);
Advertise.belongsTo(FuelType, { foreignKey: 'fuelId' });
// FuelType.hasMany(Advertise);
Advertise.belongsTo(BodyType, { foreignKey: 'bodyId' });
// BodyType.hasMany(Advertise);
Advertise.belongsTo(DrivingType, { foreignKey: 'drivingId' });
// DrivingType.hasMany(Advertise);
Advertise.belongsTo(Color, { foreignKey: 'colorId' });
// Color.hasMany(Advertise);
Advertise.belongsTo(User, { foreignKey: 'userId' });
// User.hasMany(Advertise);

export {
    Mark,
    Model,
    Generation,
    Advertise,
    TransmissionType,
    FuelType,
    BodyType,
    DrivingType,
    Color,
    User,
}