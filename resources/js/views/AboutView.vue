<script setup>
import TopMenu from '@/components/TopBar.vue'
import PageTitle from '@/atomjoy/utils/PageTitle/PageTitle.vue'
</script>

<template>
	<PageTitle :title="'page.About'" />
	<TopMenu />

	<h1>{{ $t('page.About') }}</h1>
</template>

<style></style>
