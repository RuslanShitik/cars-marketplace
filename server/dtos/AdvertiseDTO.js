class AdvertiseDTO {
    constructor(data) {
        this._id = data._id;
        this.generation = {
            _id: data.generation._id,
            name: data.generation.name,
            model: {
                _id: data.generation.model._id,
                name: data.generation.model._id,
                mark: {
                    _id: data.generation.model.mark._id,
                    name: data.generation.model.mark.name,
                }
            },
        };
        this.price = data.price;
        this.year = data.year;
        this.transmission = {
            _id: data.transmission._id,
            name: data.transmission.name,
        };
        this.capacity = data.capacity;
        this.fuel = {
            _id: data.fuel._id,
            name: data.fuel.name,
        };
        this.mileage = data.mileage;
        this.body = {
            _id: data.body._id,
            name: data.body.name,
        };
        this.driving = {
            _id: data.driving._id,
            name: data.driving.name,
        };
        this.color = {
            _id: data.color._id,
            name: data.color.name,
        };
        this.vin = data.vin;
        this.description = data.description;
        this.viewsCount = data.viewsCount;
        this.isActual = data.isActual;
        this.isModerated = data.isModerated;
        this.user = {
            _id: data.user._id,
            first_name: data.user.first_name,
            phone_number: data.user.phone_number,
            email: data.user.email,
        };
    }
}

class AdvertiseListSimpleDTO {
    constructor(data) {
        this._id = data._id;
        this.generation = {
            _id: data.generation._id,
            name: data.generation.name,
            model: {
                _id: data.generation.model._id,
                name: data.generation.model._id,
                mark: {
                    _id: data.generation.model.mark._id,
                    name: data.generation.model.mark.name,
                }
            },
        };
        this.price = data.price;
        this.year = data.year;
        this.transmission = {
            _id: data.transmission._id,
            name: data.transmission.name,
        };
        this.capacity = data.capacity;
        this.fuel = {
            _id: data.fuel._id,
            name: data.fuel.name,
        };
        this.mileage = data.mileage;
        this.body = {
            _id: data.body._id,
            name: data.body.name,
        };
        this.driving = {
            _id: data.driving._id,
            name: data.driving.name,
        };
        this.color = {
            _id: data.color._id,
            name: data.color.name,
        };
        this.isActual = data.isActual;
        this.isModerated = data.isModerated;
    }
}

export {
    AdvertiseDTO,
    AdvertiseListSimpleDTO
}
  