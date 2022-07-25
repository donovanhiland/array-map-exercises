import { capitalizeNames } from "../../exercises/map/3-capitalizeNames"
import { faker } from "@faker-js/faker"

const testSolution = (arr) =>
  arr.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())

describe("capitalizeNames", () => {
  it("capitalizes empty array", () => {
    expect(capitalizeNames([])).toMatchObject([])
  })

  it("capitalizes names", () => {
    expect(
      capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])
    ).toMatchObject(["John", "Jacob", "Jingleheimer", "Schmidt"])

    expect(capitalizeNames(["waYnE", "DwoPS"])).toMatchObject([
      "Wayne",
      "Dwops",
    ])
    expect(
      capitalizeNames([
        "CaRmen",
        "EliZAbeth",
        "JuANita",
        "ECHO",
        "Sky",
        "brava",
        "CortEZ",
      ])
    ).toMatchObject([
      "Carmen",
      "Elizabeth",
      "Juanita",
      "Echo",
      "Sky",
      "Brava",
      "Cortez",
    ])
  })

  it("capitalizes random names", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 999 }))
      ).map(() => faker.name.firstName())
      expect(capitalizeNames(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
