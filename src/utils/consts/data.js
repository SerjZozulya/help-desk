import { faker } from "@faker-js/faker";

export const data = [
  {
    key: 0,
    status: "DONE",
    priority: 3,
    name: "Printer is broken",
    applicant: "Ivanov Ivan",
    deadline: faker.date.soon({days: 15}),
    asignee: "Mihail Anatoliy",
    description: "",
    created: faker.date.recent(),
  },
  {
    key: 1,
    name: "Replace the monitor",
    status: "OPEN",
    priority: 2,
    applicant: "Obi-Wan Kenobi",
    deadline: faker.date.soon({days: 10}),
    asignee: "Mihail Anatoliy",
    description: "",
    created: faker.date.recent(),
  },
  {
    key: 2,
    status: "IN PROGRESS",
    priority: 1,
    name: "Add staples to the stapler",
    applicant: "Petr Perviy",
    deadline: faker.date.soon({days: 42}),
    asignee: "Mihail Anatoliy",
    description: "",
    created: faker.date.recent(),
  },
];

for (let i = 3; i <= 100; i++) {
  const newData = {
    key: i,
    name: faker.lorem.sentence({ min: 3, max: 7 }),
    status: faker.helpers.arrayElement(["OPEN", "IN PROGRESS", "DONE"]),
    priority: faker.number.int({ min: 1, max: 5 }),
    applicant: faker.person.fullName(),
    deadline: faker.date.soon({days: 5}),
    asignee: faker.person.fullName(),
    description: faker.lorem.text(),
    created: faker.date.recent(),
  };

  data.push(newData);
}
