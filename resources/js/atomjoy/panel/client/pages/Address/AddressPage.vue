<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, computed, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser

let country = ref('')
let state = ref('')
let city = ref('')
let street = ref('')
let postal_code = ref('')

let userCountry = computed({
	get() {
		return user.value?.address?.country ?? ''
	},
	set(newValue) {
		country.value = newValue
	},
})

let userState = computed({
	get() {
		return user.value?.address?.state ?? ''
	},
	set(val) {
		state.value = val
	},
})

let userCity = computed({
	get() {
		return user.value?.address?.city ?? ''
	},
	set(val) {
		city.value = val
	},
})

let userStreet = computed({
	get() {
		return user.value?.address?.street ?? ''
	},
	set(val) {
		street.value = val
	},
})

let userPostalCode = computed({
	get() {
		return user.value?.address?.postal_code ?? ''
	},
	set(val) {
		postal_code.value = val
	},
})

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
		<Input name="country" :label="$t('Country')" v-model="userCountry" :placeholder="$t('Enter country')" />
		<Input name="state" :label="$t('State')" v-model="userState" :placeholder="$t('Enter state')" />
		<Input name="city" :label="$t('City')" v-model="userCity" :placeholder="$t('Enter city')" />
		<Input name="street" :label="$t('Street')" v-model="userStreet" :placeholder="$t('Enter street')" />
		<Input name="postal_code" :label="$t('Postal code')" v-model="userPostalCode" :placeholder="$t('Enter postal code')" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
