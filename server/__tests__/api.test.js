import request from "supertest"
import app from "../app"
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
    }
    catch (e) {
        console.log('DB connect error:',e);
    }
});
  

describe("GET /api/advertise", () => {
    it("should return a list of advertises", async () => {
        const res = await request(app).get("/api/advertise/");
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /api/transmission" , () => {
    it("should return a list of transmissions", async () => {
        const res = await request(app).get("/api/transmission");
        expect(res.statusCode).toBe(200);
    })
});

afterAll(async () => {
    await mongoose.connection.close();
});//todo: переход на postgresql typeORM или Sequelize (пока не поздно)