import { fiveCharactersOrFewerOnly } from "../../exercises/filter/3-fiveCharactersOrFewerOnly"
import { faker } from "@faker-js/faker"

const testSolution = (arr) => arr.filter((item) => item.length <= 5)

describe("fiveCharactersOrFewerOnly", () => {
  test("empty array", () => {
    expect(fiveCharactersOrFewerOnly([])).toMatchObject([])
  })

  test("example test case", () => {
    const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]
    expect(fiveCharactersOrFewerOnly(arr)).toMatchObject(testSolution(arr))
  })

  test("random test case", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 99 }))
      ).map(() => faker.random.word())
      expect(fiveCharactersOrFewerOnly(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
