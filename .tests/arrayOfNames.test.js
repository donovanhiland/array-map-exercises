import { arrayOfNames } from "../exercises/5-arrayOfNames"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "./helpers"

describe("arrayOfNames", () => {
  it("creates an array of names empty array", () => {
    expect(arrayOfNames([])).toMatchObject([])
  })

  it("creates an array of names", () => {
    expect(arrayOfNames(people)).toMatchObject([
      "Angelina Jolie",
      "Eric Jones",
      "Paris Hilton",
      "Kayne West",
      "Bob Ziroll",
    ])
  })

  it("creates array of names random test", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(arrayOfNames(arr)).toMatchObject(
        arr.map((person) => `${person.firstName} ${person.lastName}`)
      )
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
