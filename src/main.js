import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt,faEnvelope,faExternalLinkAlt,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhoneAlt,faEnvelope,faExternalLinkAlt,faArrowRight,faInstagram,faLinkedin,);

// 滾動視差
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';




createApp(App).component("font-awesome-icon", FontAwesomeIcon).component('scroll-parallax', ScrollParallax).use(store).use(router).mount('#app')
