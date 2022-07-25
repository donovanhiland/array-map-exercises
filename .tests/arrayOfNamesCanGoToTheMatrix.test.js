import { arrayOfNamesCanGoToMatrix } from "../exercises/6-arrayOfNamesCanGoToMatrix"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "./helpers"

describe("arrayOfNamesCanGoToMatrix", () => {
  it("creates array of names can go to matrix", () => {
    expect(arrayOfNamesCanGoToMatrix(people)).toMatchObject([
      "Angelina Jolie can go to The Matrix",
      "Eric Jones is under age!!",
      "Paris Hilton is under age!!",
      "Kayne West is under age!!",
      "Bob Ziroll can go to The Matrix",
    ])
  })

  it("random cases", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(arrayOfNamesCanGoToMatrix(arr)).toMatchObject(
        arr.map(
          (person) =>
            `${person.firstName} ${person.lastName} ${
              person.age < 17 ? "is under age!!" : "can go to The Matrix"
            }`
        )
      )
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
