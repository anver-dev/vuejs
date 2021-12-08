import { createStore } from "vuex";

export default createStore({
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy(state, value) {
            state.count += value
        }
    }
});
