require("./bootstrap");

import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "./routes/routes";

// window.Vue = require("vue");
// import App from "./components/App.vue";
import { camelCase, upperFirst } from "lodash";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const requireComponent = require.context("./", true, /\.vue$/i);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
        camelCase(
            fileName
                .split("/")
                .pop()
                .replace(/\.\w+$/, "")
        )
    );
    Vue.component(
        "sc-" + componentName.toLowerCase(),
        componentConfig.default || componentConfig
    );
    console.log(componentName);
});

// files.keys().map(key =>
//     Vue.component(
//         key
//             .split("/")
//             .pop()
//             .split(".")[0],
//         files(key).default || files(key)
//     )
// );

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );

const app = new Vue({
    el: "#app",
    router: new VueRouter(routes)
});
