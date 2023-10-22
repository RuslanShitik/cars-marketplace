import request from "supertest"
import app from "../app"
import dotenv from 'dotenv';
import { TransmissionType } from "../models/index.js";

dotenv.config();
  

describe("GET /api/advertise/", () => {
    it("should return a list of advertises", async () => {
        const res = await request(app).get("/api/advertise/");
        expect(res.statusCode).toBe(200);
    });
});

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

// todo: норм тесты на все пихи