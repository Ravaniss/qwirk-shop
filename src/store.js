"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vuex_1 = require("vuex");
vue_1["default"].use(vuex_1["default"]);
exports["default"] = new vuex_1["default"].Store({
    state: {
        user: {
            id: 'abc',
            name: 'Ravaniss',
        },
        count: 0,
    },
    mutations: {
        INCREMENT_COUNT: function (state, value) {
            state.count += value;
        },
    },
    getters: {
        userName: function (state) { return state.user.name; },
        count: function (state) { return state.count; },
    },
    actions: {
        updateCount: function (_a, value) {
            var state = _a.state, commit = _a.commit;
            if (state.user) {
                commit('INCREMENT_COUNT', value);
            }
        },
    },
});
