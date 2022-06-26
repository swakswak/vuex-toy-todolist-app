<template>
  <ul>
    <table
        v-for="(todo) in this.todos.reverse()"
        v-bind:key="todo"
    >
      <tr
          type="checkbox"
          @click="done"
      >
        <td>
          <input type="checkbox">
        </td>
        <td>
          {{ todo.task }}
        </td>
        <td>
          {{
            this.toFormatString(todo.createdDate)
          }}
        </td>
      </tr>
    </table>
  </ul>
</template>

<script>

import {mapGetters} from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapGetters(["todos"])
  },
  methods: {
    toFormatString(date) {
      return moment(date).format("yyyy-MM-dd hh:mm:ss");
    }
  }
}
</script>