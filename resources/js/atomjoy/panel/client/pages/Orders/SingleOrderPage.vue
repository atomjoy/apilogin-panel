<script setup>
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, onMounted, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser

onBeforeMount(() => {
	auth.clearError()
})

function onFilter(e) {
	auth.scrollTop()
	auth.filterOrders(new FormData(e.target))
}
</script>

<template>
	<TitleH1 :title="$t('Orders')" :description="$t('Orders from last month.')" />

	<div class="box">Order details goes here.</div>
</template>

<style>
@import url('../../css/orders.css');
</style>

<style scoped>
@import url('../../css/orders-scoped.css');
</style>
