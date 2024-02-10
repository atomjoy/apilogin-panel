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
		meta: { requiresAuth: true },
	},
	// Two factor
	{
		path: '/login/f2a/:hash',
		name: 'login.f2a',
		component: () => import('@/atomjoy/auth/LoginF2aView.vue'),
		meta: { requiresAuth: false },
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
	//Admin login
	{
		path: '/admin/login',
		name: 'admin.login',
		component: () => import('@/atomjoy/auth/AdminLoginView.vue'),
		meta: { adminRoute: true },
	},
	// Admin Two factor
	{
		path: '/admin/login/f2a/:hash',
		name: 'admin.login.f2a',
		component: () => import('@/atomjoy/auth/AdminLoginF2aView.vue'),
		meta: { adminRoute: true },
	},
	// Admin password
	{
		path: '/admin/password',
		name: 'admin.password',
		component: () => import('@/atomjoy/auth/AdminPasswordView.vue'),
		meta: { adminRoute: true },
	},
	// Admin logout
	{
		path: '/admin/logout',
		name: 'admin.logout',
		component: () => import('@/atomjoy/auth/AdminLogoutView.vue'),
		meta: { adminRoute: true, requiresAdmin: true },
	},
]

export default routes
