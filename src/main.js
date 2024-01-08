import "./assets/styles/global.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faHeart,
    faHand,
    faAddressBook,
    faCreditCard,
    faLemon,
    faHourglass,
} from "@fortawesome/free-regular-svg-icons";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add([
    faHeart,
    faHand,
    faAddressBook,
    faCreditCard,
    faLemon,
    faHourglass,
    faXmark,
]);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
