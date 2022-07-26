import { fiveAndGreaterOnly } from "../../exercises/filter/1-fiveAndGreaterOnly"
import { faker } from "@faker-js/faker"

const testSolution = (arr) => arr.filter((item) => item > 5)

describe("fiveAndGreaterOnly", () => {
  test("empty array", () => {
    expect(fiveAndGreaterOnly([])).toMatchObject([])
  })

  test("example test case", () => {
    const arr = [3, 6, 8, 2]
    expect(fiveAndGreaterOnly(arr)).toMatchObject(testSolution(arr))
  })

  test("random test case", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 99 }))
      ).map(() => faker.datatype.number())
      expect(fiveAndGreaterOnly(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
