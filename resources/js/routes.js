import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Import components
import HomePage from './components/pages/HomePage.vue';
import ContactPage from './components/pages/ContactPage.vue';

//Inizializzare il router
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contacts', component: ContactPage, name: 'contacts' }
    ]
});

export default router;