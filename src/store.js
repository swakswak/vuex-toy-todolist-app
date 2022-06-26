import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            todos: [],
            sequence: 0
        }
    },

    getters: {
        todos(state) {
            return state.todos;
        }
    },

    mutations: {
        addTask(state, task) {
            state.todos.push(task);
        },

        toggleDone(state, task) {
            task.isDone = !task.isDone;
        },

        toggleAll(state, checkedAll) {
            state.todos.forEach(task => task.isDone = checkedAll);
        }
    }
})

export default store;