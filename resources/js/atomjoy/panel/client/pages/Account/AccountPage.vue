<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import Password from '@/components/input/Password.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, ref } from 'vue'

const auth = useAuthStore()
let user = auth.getUser

onBeforeMount(() => {
	auth.clearError()
})

function onSubmitEmail(e) {
	auth.scrollTop()
	auth.changeUserEmail(new FormData(e.target))
}

function onSubmitF2a(e) {
	auth.scrollTop()

	if (user.value.f2a == 1) {
		auth.disableF2a(new FormData(e.target))
	} else {
		auth.enableF2a(new FormData(e.target))
	}
}
</script>

<template>
	<TitleH1 :title="$t('Account')" :description="$t('Update your account details here.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmitEmail" method="post" class="label-color">
		<TitleH2 :title="$t('Change account email')" />
		<Input name="email" :label="$t('Email address')" v-model="user.email" :placeholder="$t('Enter email address')" />
		<Button :text="$t('Update')" />
	</form>

	<form @submit.prevent="onSubmitF2a" method="post" class="label-color">
		<TitleH2 :title="$t('Two factor authentication')" />
		<div v-if="user.f2a == 1" class="f2a-enabled">{{ $t('Enabled') }}</div>
		<div v-if="user.f2a == 0" class="f2a-disabled">{{ $t('Disabled') }}</div>
		<Password name="password_current" :label="$t('Current password')" :placeholder="$t('Enter current password')" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
