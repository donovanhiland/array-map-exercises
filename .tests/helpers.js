import { faker } from "@faker-js/faker"

export const people = [
  {
    firstName: "Angelina",
    lastName: "Jolie",
    age: 80,
  },
  {
    firstName: "Eric",
    lastName: "Jones",
    age: 2,
  },
  {
    firstName: "Paris",
    lastName: "Hilton",
    age: 5,
  },
  {
    firstName: "Kayne",
    lastName: "West",
    age: 16,
  },
  {
    firstName: "Bob",
    lastName: "Ziroll",
    age: 100,
  },
]

export const generateRandomPeople = () =>
  Array.from(Array(faker.datatype.number({ min: 0, max: 999 }))).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({
      min: 1,
      max: 99,
    }),
  }))
