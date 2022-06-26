<template>
    <table>
      <thead>
      <th>
        <input
            type="checkbox"
            @click="onAllChecked"
        >
      </th>
      <th>할 일</th>
      <th>추가 날짜</th>
      </thead>
      <tbody>
      <TaskItem
          v-for="(todo, index) in this.todos.slice().reverse()"
          v-bind:key="todo"
          :index="index"
          :todo="todo"
      />
      </tbody>
    </table>
</template>

<style>
table, tr {
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  border-collapse: collapse;
}

table th, table td {
  padding: 8px 3px 8px 3px;
}

td:nth-child(2), th:nth-child(2) {
  max-width: 500px;
  width: 500px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

<script>
import {mapGetters, mapMutations} from "vuex";
import TaskItem from "@/components/TaskItem";

export default {
  data() {
    return {
      checkedAll: false
    }
  },
  components: {TaskItem},
  computed: {
    ...mapGetters(["todos"])
  },
  methods: {
    ...mapMutations(["toggleAll"]),

    onAllChecked() {
      this.checkedAll = !this.checkedAll;
      this.toggleAll(this.checkedAll);
    }
  }
}
</script>