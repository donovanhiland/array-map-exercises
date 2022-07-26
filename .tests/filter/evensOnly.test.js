import { evensOnly } from "../../exercises/filter/2-evensOnly"
import { faker } from "@faker-js/faker"

const testSolution = (arr) => arr.filter((item) => item % 2 === 0)

describe("evensOnly", () => {
  test("empty array", () => {
    expect(evensOnly([])).toMatchObject([])
  })

  test("example test case", () => {
    const arr = [3, 6, 8, 2]
    expect(evensOnly(arr)).toMatchObject(testSolution(arr))
  })

  test("random test case", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 99 }))
      ).map(() => faker.datatype.number())
      expect(evensOnly(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
