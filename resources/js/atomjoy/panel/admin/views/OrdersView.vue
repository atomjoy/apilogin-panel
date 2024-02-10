<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<div><b>Admin Orders</b></div>
	<RouterLink to="/admin/panel" class="link">Admin Dashboard</RouterLink>
	<RouterLink to="/admin/logout" class="link">Logout Admin</RouterLink>
</template>

<style scoped>
.link {
	padding: 10px;
}
</style>
