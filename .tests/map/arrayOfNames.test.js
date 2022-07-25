import { arrayOfNames } from "../../exercises/map/5-arrayOfNames"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "../helpers"

const testSolution = (arr) =>
  arr.map((person) => `${person.firstName} ${person.lastName}`)

describe("arrayOfNames", () => {
  it("creates an array of names empty array", () => {
    expect(arrayOfNames([])).toMatchObject([])
  })

  it("creates an array of names", () => {
    expect(arrayOfNames(people)).toMatchObject(testSolution(people))
  })

  it("creates array of names random test", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(arrayOfNames(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
