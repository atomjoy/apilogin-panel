<script setup>
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, onMounted, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser
console.log(user)

onBeforeMount(() => {
	auth.clearError()
})

function onFilter(e) {
	let data = new FormData(e.target)
	for (var pair of data.entries()) {
		console.log('Input key:', pair[0], 'Value:', pair[1])
	}
	// axios request here send to server
	// auth.filterOrders(data)
	// auth.scrollTop()
}
</script>

<template>
	<TitleH1 :title="$t('Orders')" :description="$t('Orders from last month.')" />

	<div class="box">
		<ul>
			<li v-for="i in 10">Orders list here RN-{{ i }}</li>
		</ul>
	</div>
</template>

<style>
@import url('../../css/orders.css');
</style>

<style scoped>
@import url('../../css/orders-scoped.css');
ul,
li {
	list-style: none;
	padding: 5px;
	margin-block: 5px;
}
</style>
