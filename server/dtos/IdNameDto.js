export class IdNameDto {
    id;
    name

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
    }
}