<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
	<router-link to="/"><img class="float-left auth-logo" src="@/assets/images/auth-logo.png" height="70" /></router-link>
</template>

<style>
[color-scheme='dark'] {
	color-scheme: dark;
	--logo: url('@/assets/images/auth-logo-dark.png');
}
</style>

<style scoped>
@import './css/auth.css';
</style>
