"use strict";
exports.__esModule = true;
var upperFirst_1 = require("lodash/upperFirst");
var camelCase_1 = require("lodash/camelCase");
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var i18n_1 = require("./i18n");
var requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach(function (fileName) {
    var componentConfig = requireComponent(fileName);
    var componentName = upperFirst_1["default"](camelCase_1["default"](fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
    vue_1["default"].component(componentName, componentConfig["default"] || componentConfig);
});
vue_1["default"].config.productionTip = false;
new vue_1["default"]({
    router: router_1["default"],
    store: store_1["default"],
    i18n: i18n_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount('#app');
