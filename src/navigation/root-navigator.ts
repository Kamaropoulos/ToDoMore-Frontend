import { createStackNavigator } from "react-navigation"
import { TodoList } from "../views/TodoList/TodoList-screen"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = createStackNavigator(
  {
    todoList: { screen: TodoList },
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
