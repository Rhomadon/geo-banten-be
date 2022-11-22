const request = require("supertest");
const app = require("../servers/Index");
const models = require("../models");

describe("Test /api/department", () => {
  test("should return 200 when all data department is ready", async done => {
    const response = await request(app)
      .get("/api/department")
      .set("Accept", "application/json")
      .expect(200);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Success get all data department");
    expect(response.body).toHaveProperty("data");
    done();
  });

  test("should return 404 when id department not found", async done => {
    const expectedResult = {};
    const response = await request(app)
      .get("/api/department/99999")
      .set("Accept", "application/json")
      .expect(404);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Data department is not found");
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toStrictEqual(expectedResult);
    done();
  });

  test("should return 200 when id department found", async done => {
    const response = await request(app)
      .get("/api/department/1")
      .set("Accept", "application/json")
      .expect(200);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("data");
    expect(response.body.message).toBe("Success get data department by id");
    expect(response.body).toHaveProperty("data");
    done();
  });

  test("should return 200 when post data department if data valid", async done => {
    const data = {
      name: "new name",
      description: "new description"
    };

    const response = await request(app)
      .post("/api/department")
      .set("Accept", "application/json")
      .send(data)
      .expect(200);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("data");
    expect(response.body.message).toBe("Success insert data department");
    expect(response.body).toHaveProperty("data");
    done();
  });

  test("should return 200 when delete data department", async done => {
    const response = await request(app)
      .delete("/api/department/1")
      .set("Accept", "application/json")
      .send()
      .expect(200);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Success delete department by id");
    done();
  });

  test("should return 200 when update data department if data valid", async done => {
    const data = {
      name: "new name update",
      description: "new description update"
    };

    const response = await request(app)
      .patch("/api/department/1")
      .set("Accept", "application/json")
      .send(data)
      .expect(200);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Success update data department by id");
    done();
  });
});
