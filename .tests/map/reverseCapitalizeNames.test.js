import { reverseCapitalizeNames } from "../../exercises/map/4-reverseCapitalizeNames"
import { faker } from "@faker-js/faker"

const testSolution = (arr) =>
  arr.map((name) => name[0].toLowerCase() + name.slice(1).toUpperCase())

describe("reverseCapitalizeNames", () => {
  it("reverse capitalizes empty array", () => {
    expect(reverseCapitalizeNames([])).toMatchObject([])
  })

  it("reverse capitalizes names", () => {
    expect(
      reverseCapitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])
    ).toMatchObject(["jOHN", "jACOB", "jINGLEHEIMER", "sCHMIDT"])

    expect(reverseCapitalizeNames(["waYnE", "DwoPS"])).toMatchObject([
      "wAYNE",
      "dWOPS",
    ])
    expect(
      reverseCapitalizeNames([
        "CaRmen",
        "EliZAbeth",
        "JuANita",
        "ECHO",
        "Sky",
        "brava",
        "CortEZ",
      ])
    ).toMatchObject([
      "cARMEN",
      "eLIZABETH",
      "jUANITA",
      "eCHO",
      "sKY",
      "bRAVA",
      "cORTEZ",
    ])
  })

  it("reverse capitalizes random names", () => {
    const randomTest = () => {
      const arr = Array.from(
        Array(faker.datatype.number({ min: 0, max: 999 }))
      ).map(() => faker.name.firstName())
      expect(reverseCapitalizeNames(arr)).toMatchObject(testSolution(arr))
    }

    randomTest()
    randomTest()
    randomTest()
    randomTest()
  })
})
