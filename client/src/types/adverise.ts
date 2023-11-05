interface IBase {
    id: number
    name: string
}

interface IMeta {
    page: number
    perPage: number
    total: number
}

interface IMark extends IBase {};
interface ITransmission extends IBase {}
interface IFuel extends IBase {}
interface IBody extends IBase {}
interface IDriving extends IBase {}
interface IColor extends IBase {}

interface IModel extends IBase {
    mark?: IMark
}

interface IGeneration extends IBase  {
    model?: IModel
}

interface IAdvertise {
    id: number
    generation: IGeneration
    price: number
    year: number
    transmission: ITransmission
    capacity: number
    fuel: IFuel
    mileage: number
    body: IBody
    driving: IDriving
    color: IColor
}

interface IAdvertiseResponse {
    meta: IMeta
    advertises: IAdvertise[]
}
interface IMarkResponse {
    meta: IMeta
    marks: IMark[]
};

export type {
    IAdvertise,
    IAdvertiseResponse,
    IMark,
    ITransmission,
    IFuel,
    IBody,
    IDriving,
    IColor,
    IModel,
    IGeneration,
    IMarkResponse,
}