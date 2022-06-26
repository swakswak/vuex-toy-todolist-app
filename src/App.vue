<template>
  <div class="todo-wrap">
    <div class="new-task-form-wrap">
      <TaskAdder/>
    </div>
    <div class="todo-table-wrap">
      <TodoList/>
    </div>
  </div>
</template>

<script>
import TaskAdder from "@/components/NewTaskForm";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList,
    TaskAdder
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todo-wrap > div {
  display: inline-block;
}

.todo-wrap {
  text-align: center;
}

.new-task-form-wrap {
  padding-bottom: 6px;
}
</style>
