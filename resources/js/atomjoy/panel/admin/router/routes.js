// Admin
const routes = [
	// redirect to admin panel
	{
		path: '/admin/panel',
		name: 'admin.panel',
		redirect: { name: 'admin.dashboard' },
		meta: { requiresAdmin: true, adminRoute: true },
	},
	{
		path: '/admin/dashboard',
		name: 'admin.dashboard',
		component: () => import('@/atomjoy/panel/admin/views/DashboardView.vue'),
		meta: { requiresAdmin: true, adminRoute: true },
	},
	{
		path: '/admin/orders',
		name: 'admin.orders',
		component: () => import('@/atomjoy/panel/admin/views/OrdersView.vue'),
		meta: { requiresAdmin: true, adminRoute: true },
	},
]

export default routes
