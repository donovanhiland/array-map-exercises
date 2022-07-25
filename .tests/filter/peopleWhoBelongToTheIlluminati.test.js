import { peopleWhoBelongToTheIlluminati } from "../../exercises/filter/4-peopleWhoBelongToTheIlluminati"
import { faker } from "@faker-js/faker"
import { people, generateRandomPeople } from "../helpers"

const testSolution = (arr) => arr.filter((item) => item.member)

describe("peopleWhoBelongToTheIlluminati", () => {
  test("empty array", () => {
    expect(peopleWhoBelongToTheIlluminati([])).toMatchObject([])
  })

  test("example test case", () => {
    expect(peopleWhoBelongToTheIlluminati(people)).toMatchObject(
      testSolution(people)
    )
  })

  test("random test case", () => {
    const randomTest = () => {
      const arr = generateRandomPeople()
      expect(peopleWhoBelongToTheIlluminati(arr)).toMatchObject(
        testSolution(arr)
      )
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
