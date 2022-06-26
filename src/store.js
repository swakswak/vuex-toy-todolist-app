import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            todos: []
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        }
    },
    mutations: {
        addTask(state, task) {
            return state.todos.push(task);
        }
    }
})

export default store;