<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import PageTitle from '../../../utils/PageTitle/PageTitle.vue'

const auth = useAuthStore()
const user = auth.getUser

let name = ref(user.value?.name ?? '')
</script>

<template>
	<PageTitle title="Dashboard" />

	<h1>Admin Dashboard</h1>
	<h2>{{ name }}</h2>
	<RouterLink to="/admin/orders" class="link">Admin Orders</RouterLink>
	<RouterLink to="/admin/logout" class="link">Logout Admin</RouterLink>
</template>

<style scoped>
.link {
	padding: 10px;
}
</style>
