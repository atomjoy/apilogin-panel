<script setup>
const props = defineProps({
	title: { default: '' },
	description: { default: '' },
})
</script>

<template>
	<div class="h1">{{ props.title }}</div>
	<p v-if="props.description">{{ props.description }}</p>
</template>

<style scoped>
.h1 {
	float: left;
	width: 100%;
	font-size: 32px;
	font-weight: 900;
	padding-bottom: 20px;
	margin-bottom: 20px;
	border-bottom: 1px solid var(--divider-primary);
}
</style>
