import request from "supertest"
import app from "../app"
import dotenv from 'dotenv';
import { TransmissionType, Generation, FuelType, BodyType, Color, User, DrivingType } from "../models/index.js";

dotenv.config();
  
describe("POST /api/transmission/" , () => {
    it("should create a transmission object", async () => {
        const transmissionData = {
            name: String(new Date()), // Замените на соответствующие данные
        };
        
        const res = await request(app)
            .post("/api/transmission")
            .send(transmissionData);

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.name).toBe(transmissionData.name); 
    })
    it("shouldn throw a 400 status with message like 'is exist'", async () => {
        const existingTransmission = await TransmissionType.findOne();
        
        const res = await request(app)
            .post("/api/transmission")
            .send(existingTransmission.dataValues.name);

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("messages");
    })
    it("shouldn throw a 400 status with message 'name is required'", async () => {
        const res = await request(app)
            .post("/api/transmission")

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("messages");
    })
});

describe("GET /api/transmission/" , () => {
    it("should return a list of transmissions", async () => {
        const res = await request(app).get("/api/transmission");
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /api/advertise/", () => {
    it("should return a list of advertises", async () => {
        const res = await request(app).get("/api/advertise/");
        expect(res.statusCode).toBe(200);
    });
});
describe("POST /api/advertise/", () => {
    it("should create a new advertise", async () => {
        const generation = await Generation.findOne();
        const transmissionType = await TransmissionType.findOne();
        const fuelType = await FuelType.findOne();
        const bodyType = await BodyType.findOne();
        const drivingType = await DrivingType.findOne();
        const color = await Color.findOne();

        const advertiseData = {
            price: 5000,
            year: 2022,
            capacity: 2000,
            mileage: 5000,
            vin: "ABC12345",
            description: "New car for sale",
            generationId: generation.dataValues.id,
            transmissionTypeId: transmissionType.dataValues.id,
            fuelTypeId: fuelType.dataValues.id,
            bodyTypeId: bodyType.dataValues.id,
            drivingTypeId: drivingType.dataValues.id,
            colorId: color.dataValues.id,
          };
      
          const res = await request(app)
            .post("/api/advertise/")
            .send(advertiseData);
      
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("id");
    })
})


// todo: норм тесты на все пихи
// todo: сделать мидлвер авторизации и потом сделать создание обьявления