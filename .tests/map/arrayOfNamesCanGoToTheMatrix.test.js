import { arrayOfNamesCanGoToMatrix } from "../../exercises/map/6-arrayOfNamesCanGoToMatrix"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "../helpers"

const testSolution = (arr) =>
  arr.map(
    (person) =>
      `${person.firstName} ${person.lastName} ${
        person.age < 17 ? "is under age!!" : "can go to The Matrix"
      }`
  )

describe("arrayOfNamesCanGoToMatrix", () => {
  it("creates array of names can go to matrix", () => {
    expect(arrayOfNamesCanGoToMatrix(people)).toMatchObject(
      testSolution(people)
    )
  })

  it("random cases", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(arrayOfNamesCanGoToMatrix(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
