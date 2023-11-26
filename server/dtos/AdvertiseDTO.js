import e from "express";

class AdvertiseDTO {
    constructor(data) {
        this.id = data.id;
        this.generation = {
            id: data.generation.id,
            name: data.generation.name,
            model: {
                id: data.generation.model?.id,
                name: data.generation.model?.id,
                mark: {
                    id: data.generation.model?.mark.id,
                    name: data.generation.model?.mark.name,
                }
            },
        };
        this.price = data.price;
        this.year = data.year;
        this.transmission = {
            id: data.transmission.id,
            name: data.transmission.name,
        };
        this.capacity = data.capacity;
        this.fuel = {
            id: data.fuel.id,
            name: data.fuel.name,
        };
        this.mileage = data.mileage;
        this.body = {
            id: data.body.id,
            name: data.body.name,
        };
        this.driving = {
            id: data.driving.id,
            name: data.driving.name,
        };
        this.color = {
            id: data.color.id,
            name: data.color.name,
        };
        this.vin = data.vin;
        this.description = data.description;
        this.viewsCount = data.viewsCount;
        this.isActual = data.isActual;
        this.isModerated = data.isModerated;
        this.user = {
            id: data.user.id,
            first_name: data.user.first_name,
            phone_number: data.user.phone_number,
            email: data.user.email,
        };
    }
}

class AdvertiseListSimpleDTO {
    constructor(data) {
        this.id = data.id;
        this.generation = {
            id: data.Generation.id,
            name: data.Generation.name,
            model: {
                id: data.Generation.Model?.id,
                name: data.Generation.Model?.name,
                mark: {
                    id: data.Generation.Model?.Mark.id,
                    name: data.Generation.Model?.Mark.name,
                }
            },
        };
        this.price = data.price;
        this.year = data.year;
        this.transmission = {
            id: data.TransmissionType.id,
            name: data.TransmissionType.name,
        };
        this.capacity = data.capacity;
        this.fuel = {
            id: data.FuelType.id,
            name: data.FuelType.name,
        };
        this.mileage = data.mileage;
        this.body = {
            id: data.BodyType.id,
            name: data.BodyType.name,
        };
        this.driving = {
            id: data.DrivingType.id,
            name: data.DrivingType.name,
        };
        this.color = {
            id: data.Color.id,
            name: data.Color.name,
        };
    }
}

export {
    AdvertiseDTO,
    AdvertiseListSimpleDTO
}
  