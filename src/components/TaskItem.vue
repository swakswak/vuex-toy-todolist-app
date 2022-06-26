<template>
  <tr
      :class="`todo-done-${todo.isDone}`"
      type="checkbox"
      :title="`${todo.task}`"
  >
    <td>
      <input
          :checked="todo.isDone"
          type="checkbox"
          @click="onChecked(todo)"
      >
    </td>
    <td :class="`todo-done-${todo.isDone}`">
      {{ todo.task }}
    </td>
    <td>
      {{ toFormattedString(this.todo.createdDate) }}
    </td>
  </tr>
</template>

<style>
.todo-done-true {
  text-decoration: line-through;
  color: gray;
}

.todo-done-false {
  text-decoration: none;
}
</style>

<script>
import moment from "moment";
import {mapMutations} from "vuex";

export default {
  name: 'TaskForTodo',

  props: {
    index: NaN,
    todo: {},
  },

  methods: {
    ...mapMutations(["toggleDone"]),
    toFormattedString(date) {
      return moment(date).format("YY/MM/DD HH:mm");
    },
    onChecked(task) {
      this.toggleDone(task);
    }
  }
}
</script>