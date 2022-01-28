const server = require("../server");
const request = require("supertest");
const db = require("../../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe("[GET] /api/celebs", () => {
  test("responds with all of the celebs", async () => {
    const res = await request(server).get("/api/celebs");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(3);
  });
});

describe("[GET] /api/celebs/:id", () => {
  test("responds with all of the celebs", async () => {
    const res = await request(server).get("/api/celebs/1");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      celebs_id: 1,
      first_name: "Gary V",
      job: "entrepreneur",
    });
  });
});

describe("[POST] /api/phones", () => {
  test("responds with new phone", async () => {
    const res = await request(server).post("/api/celebs").send({
      first_name: "random first name",
      job: "random job",
    });
    expect(res.body).toMatchObject({
      celebs_id: 4,
      first_name: "random first name",
      job: "manager",
    });
  });
  test("responds with status 201", async () => {
    const res = await request(server).post("/api/phones").send({
      first_name: "random first name",
      job: "cleaner",
    });
    expect(res.status).toBe(201);
  });
});