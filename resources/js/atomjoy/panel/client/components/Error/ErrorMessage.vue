<script setup>
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
const store = useAuthStore()
</script>

<template>
	<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>
</template>

<style scoped>
.alert-error {
	float: left;
	width: 100%;
	color: #ff2233;
	background: #ff223311;
	border: 1px solid #ff2233;
	margin-bottom: 10px;
	padding: 10px 15px;
	font-size: 14px;
	font-weight: 600;
}

.alert-info {
	float: left;
	width: 100%;
	color: #55cc55;
	background: #55cc5511;
	border: 1px solid #55cc55;
	margin-bottom: 10px;
	padding: 10px 15px;
	font-size: 14px;
	font-weight: 600;
}
</style>
