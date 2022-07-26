import { stringItUp } from "../../exercises/map/2-stringItUp"
import { faker } from "@faker-js/faker"

const testSolution = (arr) => arr.map((n) => String(n)

describe("stringItUp", () => {
  it("♾", () => {
    expect(stringItUp([Infinity])).toMatchObject(["Infinity"])
  })

  it("changes empty array", () => {
    expect(stringItUp([])).toMatchObject([])
  })

  it("changes numbers to strings", () => {
    expect(stringItUp([2, 5, 100])).toMatchObject(["2", "5", "100"])
  })

  it("random test", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 99 }))
      ).map(() => faker.datatype.number())

      expect(stringItUp(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
