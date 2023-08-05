<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
	<router-link to="/" id="topbar-logo"><img src="@/assets/images/auth-logo.png" /></router-link>
</template>

<style>
[color-scheme='dark'] {
	color-scheme: dark;
	--logo: url('@/assets/images/auth-logo-dark.png');
}
</style>

<style scoped>
#topbar-logo {
	float: left;
	margin-right: 10px;
}

#topbar-logo img {
	display: block;
	float: left;
	line-height: 0px;
	height: 60px;
	width: auto;
	content: var(--logo) !important;
}
</style>
