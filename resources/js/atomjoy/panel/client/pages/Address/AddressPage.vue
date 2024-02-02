<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount } from 'vue'

const auth = useAuthStore()
const user = auth.getUser

onBeforeMount(() => {
	auth.clearError()
})

function onSubmitDetails(e) {
	auth.scrollTop()
	auth.changeUserAddress(new FormData(e.target))
}
</script>

<template>
	<TitleH1 :title="$t('Address')" :description="$t('Update your address details.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmitDetails" method="post" class="label-color">
		<TitleH2 :title="$t('Home address')" />
		<Input name="country" :label="$t('Country')" v-model="user.address.country" :placeholder="$t('Enter country')" />
		<Input name="state" :label="$t('State')" v-model="user.address.state" :placeholder="$t('Enter state')" />
		<Input name="city" :label="$t('City')" v-model="user.address.city" :placeholder="$t('Enter city')" />
		<Input name="street" :label="$t('Street')" v-model="user.address.street" :placeholder="$t('Enter street')" />
		<Input name="postal_code" :label="$t('Postal code')" v-model="user.address.postal_code" :placeholder="$t('Enter postal code')" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
