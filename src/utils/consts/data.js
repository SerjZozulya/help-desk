import { faker } from "@faker-js/faker";

const users = []

export const data = [];

const generateComments = () => {
  let array = []

  for (let i = 0; i <= faker.number.int({ min: 1, max: 5 }); i++) {
    array.push({
      id: i,
      author: faker.helpers.arrayElement(users),
      text: faker.lorem.text()
    })
  }

  return array
}

for (let i = 0; i <= 20; i++) {
  users.push( {
    id: i,
    name: faker.person.fullName(),
    department: faker.commerce.department()
  })
}

for (let i = 0; i <= 100; i++) {
  const newData = {
    key: i,
    name: faker.lorem.sentence({ min: 3, max: 7 }),
    status: faker.helpers.arrayElement(["OPEN", "IN PROGRESS", "DONE"]),
    priority: faker.number.int({ min: 1, max: 5 }),
    applicant: faker.helpers.arrayElement(users),
    deadline: faker.date.soon({days: 5}),
    asignee: faker.helpers.arrayElement(users),
    description: faker.lorem.text(),
    created: faker.date.recent(),
    comments: generateComments()
  };

  data.push(newData);
}

