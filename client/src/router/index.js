import { createRouter, createWebHashHistory } from "vue-router";
import { children } from "./children";
import Index from "../views/Index.vue";
import Setting from "../views/Setting.vue";
import About from "../views/About.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "index",
			component: Index,
			redirect: "/time",
			children: children,
		},
		{
			path: "/setting",
			name: "setting",
			component: Setting,
		},
		{
			path: "/about",
			name: "about",
			component: About,
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
		},
	],
});

export { router };
