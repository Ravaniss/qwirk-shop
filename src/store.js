import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            id: 'abc',
            name: 'Ravaniss',
        },
        count: 0,
    },
    mutations: {
        INCREMENT_COUNT(state, value) {
            state.count += value;
        },
    },
    getters: {
        userName: (state) => state.user.name,
        count: (state) => state.count,
    },
    actions: {
        updateCount({ state, commit }, value) {
            if (state.user) {
                commit('INCREMENT_COUNT', value);
            }
        },
    },
});
//# sourceMappingURL=store.js.map