import request from "supertest";
import { app, HTTP_STATUSES } from "../../src";
import * as http from "http";

describe("/course", () => {
  beforeAll(async () => {
    await request(app).delete("/__test__/data");
  });

  it("should return 200 and empty array", async function () {
    await request(app).get("/courses").expect(HTTP_STATUSES.OK_200, []);
  });
  it("should return 404 for not existing course", async function () {
    await request(app).get("/courses/1").expect(HTTP_STATUSES.NOT_FOUND_404);
  });
  it("should NOT create course with incorrect input data", async function () {
    await request(app)
      .post("/courses")
      .send({ title: "" })
      .expect(HTTP_STATUSES.BAD_REQUEST_400);
    await request(app).get("/courses").expect(HTTP_STATUSES.OK_200, []);
  });
  let createdCourse1: any = null;
  it("should create course with correct input data", async function () {
    const createResponse = await request(app)
      .post("/courses")
      .send({ title: "it-incubator course" })
      .expect(HTTP_STATUSES.CREATED_201);
    createdCourse1 = createResponse.body;
    expect(createdCourse1).toEqual({
      id: expect.any(Number),
      title: "it-incubator course",
    });
    await request(app)
      .get("/courses")
      .expect(HTTP_STATUSES.OK_200, [createdCourse1]);
  });
  let createdCourse2: any = null;
  it("should create one more course", async function () {
    const createResponse = await request(app)
      .post("/courses")
      .send({ title: "it-incubator course 2" })
      .expect(HTTP_STATUSES.CREATED_201);
    createdCourse2 = createResponse.body;
    expect(createdCourse2).toEqual({
      id: expect.any(Number),
      title: "it-incubator course",
    });
    await request(app)
      .get("/courses")
      .expect(HTTP_STATUSES.OK_200, [createdCourse1, createdCourse2]);
  });
  it("should NOT update course with incorrect input data", async function () {
    await request(app)
      .put("/courses/" + createdCourse1.id)
      .send({ title: "" })
      .expect(HTTP_STATUSES.BAD_REQUEST_400);
    await request(app)
      .get("/courses/" + createdCourse1.id)
      .expect(HTTP_STATUSES.OK_200, createdCourse1);
  });
  it("should NOT update course that not exist", async function () {
    await request(app)
      .put("/courses/" + -100)
      .send({ title: "good title" })
      .expect(HTTP_STATUSES.NOT_FOUND_404);
  });
  it("should update course with correct input data", async function () {
    await request(app)
      .put("/courses/" + createdCourse1.id)
      .send({ title: "good new title" })
      .expect(HTTP_STATUSES.NO_CONTENT_204);

    await request(app)
      .get("/courses/" + createdCourse1.id)
      .expect(HTTP_STATUSES.OK_200, {
        ...createdCourse1,
        title: "good new title",
      });

    await request(app)
      .get("/courses/" + createdCourse2.id)
      .expect(HTTP_STATUSES.OK_200, createdCourse2);
  });
  it("should delete both courses", async function () {
    await request(app)
      .delete("/courses/" + createdCourse1.id)
      .expect(HTTP_STATUSES.NO_CONTENT_204);

    await request(app)
      .get("/courses/" + createdCourse1.id)
      .expect(HTTP_STATUSES.NOT_FOUND_404, {
        ...createdCourse1,
        title: "good new title",
      });

    await request(app)
      .delete("/courses/" + createdCourse2.id)
      .expect(HTTP_STATUSES.NO_CONTENT_204);

    await request(app)
      .get("/courses/" + createdCourse2.id)
      .expect(HTTP_STATUSES.NOT_FOUND_404, {
        ...createdCourse1,
        title: "good new title",
      });

    await request(app)
      .get("/courses/" + createdCourse2.id)
      .expect(HTTP_STATUSES.OK_200, []);
  });
});