<template>
  <div class="todo-input-text-wrap">
    <input
        v-model="newTask"
        class="todo-input-text"
        placeholder="새로운 할 일 추가"
        type="text"
        @keypress.enter="addToStoreTodos"
    >
    <button @click="addToStoreTodos">추가</button>
  </div>
</template>

<style>
.todo-input-text-wrap {
  text-align: left;
}

.todo-input-text {
  width: 600px;
}
</style>

<script>
import {mapMutations} from "vuex";
import validator from "@/support/validator";

export default {
  data() {
    return {
      newTask: ''
    }
  },

  methods: {
    ...mapMutations(['addTask']),

    addToStoreTodos() {
      console.log(this.newTask)
      if (validator.isBlank(this.newTask)) {
        alert("할 일은 빈 값 또는 공백일 수 없습니다.");
        return;
      }
      this.addTask({
        task: this.newTask,
        isDone: false,
        createdDate: new Date()
      });
      this.newTask = '';
    }
  },
}
</script>