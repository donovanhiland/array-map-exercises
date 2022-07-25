import { doubleNumbers } from "../exercises/1-doubleNumbers"
import { faker } from "@faker-js/faker"

describe("doubleNumbers", () => {
  it("doubles empty array", () => {
    expect(doubleNumbers([])).toMatchObject([])
  })

  it("doubles negatives", () => {
    expect(doubleNumbers([-1, -2, -3])).toMatchObject([-2, -4, -6])
  })

  it("doubles numbers", () => {
    expect(doubleNumbers([2, 5, 100])).toMatchObject([4, 10, 200])
  })

  it("doubles randomly generated", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 999 }))
      ).map(() => faker.random.numeric())
      const doubledNumbers = arr.map((num) => num * 2)
      expect(doubleNumbers(arr)).toMatchObject(doubledNumbers)
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
