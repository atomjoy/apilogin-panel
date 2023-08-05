// Panel
const routes = [
	// redirect to admin panel
	{
		path: '/admin/panel',
		name: 'admin.panel',
		redirect: { name: 'admin.dashboard' },
	},
	// redirect to client panel
	{
		path: '/client/panel',
		name: 'client.panel',
		redirect: { name: 'panel.profil' },
	},
	// admin panel dashboard
	{
		path: '/panel/dashboard',
		name: 'admin.dashboard',
		component: () => import('@/atomjoy/panel/admin/views/DashboardView.vue'),
		meta: { requiresAuth: true },
	},
	// client panel profil
	{
		path: '/panel/profil',
		name: 'panel.profil',
		component: () => import('@/atomjoy/panel/client/views/ProfilView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/address',
		name: 'panel.address',
		component: () => import('@/atomjoy/panel/client/views/AddressView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/orders',
		name: 'panel.orders',
		component: () => import('@/atomjoy/panel/client/views/OrdersView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/orders/:id',
		name: 'panel.orders.details',
		component: () => import('@/atomjoy/panel/client/views/SingleOrderView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/messages',
		name: 'panel.messages',
		component: () => import('@/atomjoy/panel/client/views/OrdersView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/notifications',
		name: 'panel.notifications',
		component: () => import('@/atomjoy/panel/client/views/OrdersView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/account',
		name: 'panel.account',
		component: () => import('@/atomjoy/panel/client/views/AccountView.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/panel/account/delete',
		name: 'panel.account.delete',
		component: () => import('@/atomjoy/panel/client/views/AccountDeleteView.vue'),
		meta: { requiresAuth: true },
	},
	// Logged only
	{
		path: '/panel/password',
		name: 'panel.password',
		component: () => import('@/atomjoy/panel/client/views/PasswordView.vue'),
		meta: { requiresAuth: true },
	},
]

export default routes
