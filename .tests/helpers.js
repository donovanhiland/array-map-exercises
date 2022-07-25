import { faker } from "@faker-js/faker"

export const people = [
  {
    firstName: "Angelina",
    lastName: "Jolie",
    age: 80,
    member: true,
  },
  {
    firstName: "Eric",
    lastName: "Jones",
    age: 2,
    member: false,
  },
  {
    firstName: "Paris",
    lastName: "Hilton",
    age: 5,
    member: true,
  },
  {
    firstName: "Kayne",
    lastName: "West",
    age: 16,
    member: false,
  },
  {
    firstName: "Bob",
    lastName: "Ziroll",
    age: 100,
    member: true,
  },
]

export const generateRandomPeople = () =>
  Array.from(Array(faker.datatype.number({ min: 0, max: 99 }))).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({
      min: 1,
      max: 99,
    }),
    member: faker.datatype.boolean(),
  }))
