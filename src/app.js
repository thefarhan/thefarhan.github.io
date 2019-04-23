//import "../node_modules/jquery/dist/jquery.min"
import "../node_modules/bootstrap-v4-rtl/dist/js/bootstrap.min"
import Vue from "../node_modules/vue/dist/vue"

/*
Vue.component('home', () => import("./components/home"));
Vue.component('home', () => import("./components/about"));
*/
import home from './components/home.vue'
import about from './components/about.vue'
import skills from './components/skills.vue'
import works from './components/works.vue'
import contact from './components/contact.vue'


let app = new Vue({
    el:"#app",
/*    components: {
        home: () => import('./components/home'),
        about: () => import('./components/about'),
        skills: () => import('./components/skills'),
        works: () => import('./components/works'),
        contact: () => import('./components/contact'),
    },*/
    components: {
        home: home,
        about: about,
        skills: skills,
        works: works,
        contact: contact,
    },
    //component: () => import('./components/home.vue'),
    data: {
        "currentPage": 'home',
        "transitionType":       'component-fade',
        "enterTransitionType":  'component-fade-enter-active',
        "leaveTransitionType":  'component-fade-leave-active',
        menuVisibility: false
    },
    methods: {
        changePage: function (page) {
            this.currentPage = page
        },
        toggleMenu(){
            this.menuVisibility = !this.menuVisibility;
        }
    },
    computed: {
        loadPage: function () {
            return this.currentPage;
        }
    }
});
