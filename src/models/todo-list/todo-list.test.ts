import { TodoListModel, TodoList } from "./todo-list"

test("can be created", () => {
  const instance: TodoList = TodoListModel.create({})

  expect(instance).toBeTruthy()
})