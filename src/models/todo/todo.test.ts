import { TodoModel, Todo } from "./todo"

test("can be created", () => {
  const instance: Todo = TodoModel.create({})

  expect(instance).toBeTruthy()
})