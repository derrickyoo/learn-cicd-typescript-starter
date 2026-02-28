import { describe, expect, test } from "vitest";

const person = {
  isActive: false, // temp change to see ci worflow fail
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
