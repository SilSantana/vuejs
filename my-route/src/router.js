import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Dunkirk from './components/Dunkirk.vue';
import DarkKnight from './components/DarkKnight.vue';
import Interstellar from './components/Interstellar.vue';
import NotFound from './components/NotFound.vue';


Vue.use(VueRouter);

const routes = [
    {path:'/', component: Home},
    {path:'/darkknight', component: DarkKnight},
    {path:'/dunkirk', component: Dunkirk},
    {path:'/dunkirk/:category', component: Dunkirk, props: true},
    {path:'/interstellar', component: Interstellar},
    {path:'/*', component: NotFound},
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;