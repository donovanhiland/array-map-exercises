import { wrapWithHtml } from "../exercises/7-wrapWithHtml"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "./helpers"

describe("wrapWithHtml", () => {
  it("creates an array of names empty array", () => {
    expect(wrapWithHtml([])).toMatchObject([])
  })

  it("creates an array of names", () => {
    expect(wrapWithHtml(people)).toMatchObject([
      "<h1>Angelina Jolie</h1><h2>80</h2>",
      "<h1>Eric Jones</h1><h2>2</h2>",
      "<h1>Paris Hilton</h1><h2>5</h2>",
      "<h1>Kayne West</h1><h2>16</h2>",
      "<h1>Bob Ziroll</h1><h2>100</h2>",
    ])
  })

  it("creates array of names random test", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(wrapWithHtml(arr)).toMatchObject(
        arr.map(
          (person) =>
            `<h1>${person.firstName} ${person.lastName}</h1><h2>${person.age}</h2>`
        )
      )
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
