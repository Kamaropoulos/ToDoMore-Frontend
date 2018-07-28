import { types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TodoListModel = types
  .model("TodoList")
  .props({})
  .views(self => ({}))
  .actions(self => ({}))

type TodoListType = typeof TodoListModel.Type
export interface TodoList extends TodoListType {}
type TodoListSnapshotType = typeof TodoListModel.SnapshotType
export interface TodoListSnapshot extends TodoListSnapshotType {}