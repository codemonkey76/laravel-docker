require('./bootstrap');

import "tailwindcss/tailwind.css"

import Vue from 'vue';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faBug, faCog, faHome, faTachometerAlt, faTasks, faTicketAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

library.add(faAddressCard, faBuffer, faBuilding, faBug, faCog, faHome, faTachometerAlt, faTasks, faTicketAlt, faUsers);

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue toast notifications
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);


const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
});
