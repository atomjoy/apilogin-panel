const routes = [
	// Authentication
	{
		path: '/login',
		name: 'login',
		component: () => import('@/atomjoy/auth/LoginView.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/atomjoy/auth/RegisterView.vue'),
	},
	{
		path: '/activate/:id/:code',
		name: 'activate',
		component: () => import('@/atomjoy/auth/ActivateView.vue'),
	},
	{
		path: '/password',
		name: 'password',
		component: () => import('@/atomjoy/auth/PasswordView.vue'),
	},
	// Logout
	{
		path: '/logout',
		name: 'logout',
		component: () => import('@/atomjoy/auth/LogoutView.vue'),
	},
	// Logged only
	{
		path: '/password-change',
		name: 'password.change',
		component: () => import('@/atomjoy/auth/PasswordChangeView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/change/email/:id/:code',
		name: 'change.email',
		component: () => import('@/atomjoy/auth/EmailChangeView.vue'),
		meta: { requiresAuth: true },
	},
]

export default routes
