import Login from "../views/login/index.js";
import Register from "../views/register/index.js";
import NotFound from "../views/notFound/index.js";
import Home from "../views/home/index.js";

var routes = [
	
		{
			component : Login,
			path: "/login",
			private: false,

		},
		{
			component: Register,
			path: "/register",
			private: false,
		},
		{
			component: NotFound,
			path: "/app",
			private: true
		},
		{
			component: Home,
			path: "/home",
			private: true,
		},
		{
			component: Login,
			path: "/",
			private: false,
		}
		
	
]

export default routes;
