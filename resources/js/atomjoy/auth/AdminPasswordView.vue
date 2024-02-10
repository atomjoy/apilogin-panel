<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from './stores/auth.js'
import PageTitle from './widget/PageTitle.vue'
import ChangeLocale from './widget/ChangeLocale.vue'
import PolicyBar from './PolicyBar.vue'
import AuthLogo from './AuthLogo.vue'
import Input from '@/components/input/Input.vue'

const store = useAuthStore()
let email = ref('')

onMounted(() => {
	store.clearError()
})

function onSubmit(e) {
	store.scrollTop()
	store.resetUserPasswordAdmin(new FormData(e.target))
}
</script>

<template>
	<PageTitle :title="$t('message.password_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="top-bar">
				<AuthLogo />
				<ChangeLocale />
			</div>

			<div class="form-wraper">
				<form @submit.prevent="onSubmit" class="form-auth">
					<h1 class="full">{{ $t('password.Reset_password') }} {{ $t('login.Admin', 'Admin') }}</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<Input :focus="'true'" type="text" name="email" v-model="email" :placeholder="$t('password.Email_address_eg')" :label="$t('password.Email_address')">
						<i class="far fa-envelope"></i>
					</Input>

					<div class="full full-margin">
						<button class="button" :title="$t('password.Send_password')">{{ $t('password.Send_password') }}</button>
					</div>

					<div class="full">
						<router-link to="/admin/login" class="link-left">{{ $t('password.Have_an_account') }}</router-link>
						<!-- <router-link to="/admin/register" class="link-right">{{ $t('password.Dont_have_an_account') }}</router-link> -->
					</div>
				</form>
			</div>
		</div>

		<PolicyBar />
	</div>
</template>

<style scoped>
@import './css/auth.css';
</style>
