import { canSeeMatrix } from "../../exercises/filter/5-canSeeMatrix"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "../helpers.js"

const testSolution = (arr) => arr.filter((person) => person.age > 16)

describe("canSeeMatrix", () => {
  test("empty array", () => {
    expect(canSeeMatrix([])).toMatchObject([])
  })

  test("example test case", () => {
    expect(canSeeMatrix(people)).toMatchObject(testSolution(people))
  })

  test("random test case", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(canSeeMatrix(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
