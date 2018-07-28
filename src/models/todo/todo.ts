import { types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const TodoModel = types
  .model("Todo")
  .props({})
  .views(self => ({}))
  .actions(self => ({}))

type TodoType = typeof TodoModel.Type
export interface Todo extends TodoType {}
type TodoSnapshotType = typeof TodoModel.SnapshotType
export interface TodoSnapshot extends TodoSnapshotType {}