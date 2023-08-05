<script setup>
const props = defineProps({
	title: { default: '' },
	description: { default: '' },
})
</script>

<template>
	<div class="h2">{{ props.title }}</div>
	<p v-if="props.description">{{ props.description }}</p>
</template>

<style scoped>
.h2 {
	float: left;
	width: 100%;
	font-size: 18px;
	font-weight: 700;
	margin-top: 20px;
	padding-block: 10px;
}
</style>
