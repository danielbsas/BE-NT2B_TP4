import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Formulario from "./components/Formulario.vue";
import HttpUsuarios from "./components/HttpUsuarios.vue";

export const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/formulario", component: Formulario},
        {path:"/httpusuarios", component: HttpUsuarios}
    ],
});

