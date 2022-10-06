import Time from "../views/index/Time.vue";
import Crypto from "../views/index/Crypto.vue";

var children = [
	{ path: "/time", name: "Time convert", component: Time, icon: "mdi-timer" },
	{ path: "/crypto", name: "Crypto methods", component: Crypto, icon: "mdi-hexagon" },
];

export { children };
