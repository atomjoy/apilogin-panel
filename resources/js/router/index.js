import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import HomeView from '@/views/HomeView.vue'

// Login
import authRoutes from '@/atomjoy/auth/router/routes.js'
// Panel
import panelClientRoutes from '@/atomjoy/panel/client/router/routes.js'
// Input
import InputDemo from '@/components/input/example/DemoPageView.vue'

const router = createRouter({
	linkActiveClass: 'router-link-active',
	history: createWebHistory('/'),
	routes: [
		// Auth, login, register, logout, ...
		...authRoutes,
		// Panel, profil, account ...
		...panelClientRoutes,
		// Demo Page
		{
			path: '/demo/input',
			name: 'demo.input',
			component: InputDemo,
		},
		// Webpage
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		// Catch all
		{
			path: '/:catchAll(.*)',
			name: 'error.page',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
})

router.beforeEach(async (to, from, next) => {
	// ✅ This will work make sure the correct store is used for the current running app
	const auth = useAuthStore()
	// ✅ Login with remember me token and/or check is user authenticated
	await auth.isAuthenticated()
	// ✅ Redirect to panel if logged
	if (to.name == 'login' && auth.isLoggedIn.value) {
		next({ name: 'panel' })
	} else if (to.meta.requiresAuth && !auth.isLoggedIn.value) {
		// ✅ Redirect to login if not logged
		next({ name: 'login', query: { redirected_from: to.fullPath } })
	} else {
		// ✅ Continue
		next()
	}
})

export default router
