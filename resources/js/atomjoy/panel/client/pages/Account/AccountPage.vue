<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount } from 'vue'
import axios from 'axios'

const auth = useAuthStore()
const user = auth.getUser

onBeforeMount(() => {
	auth.clearError()
})

async function enable() {
	const { data } = await axios.get('/web/api/f2a/enable')
	return data
}

async function disable() {
	const { data } = await axios.get('/web/api/f2a/disable')
	return data
}

function onSubmitEmail(e) {
	auth.scrollTop()
	auth.changeUserEmail(new FormData(e.target))
}

function onSubmitF2a(e) {
	try {
		console.log(user.value.f2a)

		if (user.value.f2a == 1) {
			// Disable
			disable().then((res) => {
				user.value.f2a == 0
				document.location.reload()
			})
		} else {
			// Enable
			enable().then((res) => {
				user.value.f2a == 1
				document.location.reload()
			})
		}
	} catch (e) {
		console.log(e)
	}
}
</script>

<template>
	<TitleH1 :title="$t('Account')" :description="$t('Update your account details here.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmitEmail" method="post" class="label-color">
		<TitleH2 :title="$t('Change account email')" />
		<Input name="email" :label="$t('Email address')" v-model="user.email" />
		<Button :text="$t('Update')" />
	</form>

	<form @submit.prevent="onSubmitF2a" method="post" class="label-color">
		<TitleH2 :title="$t('Two factor authentication')" />
		<div v-if="user.f2a == 1" class="f2a-enabled">{{ $t('Enabled') }}</div>
		<div v-if="user.f2a == 0" class="f2a-disabled">{{ $t('Disabled') }}</div>
		<Button :text="$t('Change')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
.f2a-enabled {
	float: left;
	width: 100%;
	color: #fff;
	background: #55cc55;
	font-weight: 900;
	padding: 15px 20px;
	border-radius: 10px;
}
.f2a-disabled {
	float: left;
	width: 100%;
	color: #fff;
	background: #ff2200;
	font-weight: 900;
	padding: 15px 20px;
	border-radius: 10px;
}
</style>
