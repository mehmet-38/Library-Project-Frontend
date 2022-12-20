import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faUser, faHome, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faTrash, faHome);
createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
