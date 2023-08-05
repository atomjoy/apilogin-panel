<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { computed, onBeforeMount, onMounted, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser
console.log(user)

onBeforeMount(() => {
	auth.clearError()
})

function onSubmitDetails(e) {
	let data = new FormData(e.target)
	for (var pair of data.entries()) {
		console.log('Input key:', pair[0], 'Value:', pair[1])
	}
	// axios request here send to server
	auth.changeUserAddress(data)
	auth.scrollTop()
}
</script>

<template>
	<TitleH1 :title="$t('Address')" :description="$t('Update your address details.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmitDetails" method="post" class="label-color">
		<TitleH2 :title="$t('Home address')" />
		<Input name="country" :label="$t('Country')" v-model="user.address.country" />
		<Input name="state" :label="$t('State')" v-model="user.address.state" />
		<Input name="city" :label="$t('City')" v-model="user.address.city" />
		<Input name="street" :label="$t('Street')" v-model="user.address.street" />
		<Input name="postal_code" :label="$t('Postal code')" v-model="user.address.postal_code" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
