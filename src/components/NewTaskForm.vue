<template>
  <input
      v-model="newTask"
      placeholder="새로운 할 일 추가"
      type="text"
      @keydown.enter="addToStoreTodos"
  >
  <button @click="addToStoreTodos">추가</button>
</template>

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
      if (validator.isBlank(this.newTask)) {
        alert("할 일은 빈 값 또는 공백일 수 없습니다.");
        return;
      }
      console.log("newTask", this.newTask);
      this.addTask({
        task: this.newTask,
        isDone: false,
        createdDate: new Date()
      });
      console.log("todos", this.$store.getters.todos);
      this.newTask = '';
    }
  },
}
</script>