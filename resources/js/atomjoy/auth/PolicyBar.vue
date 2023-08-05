<script setup></script>

<template>
	<div class="policy-bar">
		<router-link to="/pdf/policy" class="link-docs" target="_blank"> {{ $t('docs.Policy') }} </router-link> | <router-link to="/pdf/services" class="link-docs" target="_blank"> {{ $t('docs.Services') }} </router-link> |
		<router-link to="/support" class="link-docs" target="_blank"> {{ $t('docs.Support') }} </router-link>
	</div>
</template>

<style scoped>
@import './css/auth.css';
</style>
