<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from './stores/auth.js'
import { useI18n } from 'vue-i18n'
import PageTitle from './widget/PageTitle.vue'
import ChangeLocale from './widget/ChangeLocale.vue'
import PolicyBar from './PolicyBar.vue'
import AuthLogo from './AuthLogo.vue'
import Input from '@/components/input/Input.vue'
import Password from '@/components/input/Password.vue'
import Checkbox from '@/components/input/Checkbox.vue'

const { t, locale } = useI18n({ useScope: 'global' })
const store = useAuthStore()
let name = ref('')
let email = ref('')
let password = ref('')
let password_confirmation = ref('')
let confirm_services = ref(false)

// Input v-focus
const vFocus = { mounted: (el) => el.focus() }

onMounted(() => {
	store.clearError()
})

function onSubmit(e) {
	if (confirm_services.value) {
		store.scrollTop()
		store.registerUser(new FormData(e.target))
	} else {
		alert(t('register.Confirm_services'))
	}
}
</script>

<template>
	<PageTitle :title="$t('message.register_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="top-bar">
				<AuthLogo />
				<ChangeLocale />
			</div>

			<div class="form-wraper">
				<form @submit.prevent="onSubmit" class="form-auth" id="registerForm">
					<h1 class="full">
						{{ $t('register.Sign_Up') }}
					</h1>

					<div v-if="store.getMessage.value != null" :class="[store.getError.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store.getMessage.value }}</div>

					<Input :focus="'true'" type="text" name="name" v-model="name" :placeholder="$t('register.Name_eg')" :label="$t('register.Name')">
						<i class="far fa-user"></i>
					</Input>

					<Input type="text" name="email" v-model="email" :placeholder="$t('register.Email_address_eg')" :label="$t('register.Email_address')">
						<i class="far fa-envelope"></i>
					</Input>

					<Password type="password" name="password" v-model="password" :placeholder="$t('register.Password_eg')" :label="$t('register.Password')">
						<i class="far fa-key"></i>
					</Password>

					<Password type="password" name="password_confirmation" v-model="password_confirmation" :placeholder="$t('register.Confirm_password_eg')" :label="$t('register.Confirm_password')">
						<i class="far fa-key"></i>
					</Password>

					<div class="full">
						<Checkbox :label="$t('register.Confirm_services')" value="1" v-model="confirm_services" name="confirm_services" />
						<RouterLink to="/pdf/services" class="link-policy" target="_blank">{{ $t('register.Policy') }}</RouterLink>
					</div>

					<div class="full">
						<button class="button" :title="$t('register.Register')" :disabled="!confirm_services">{{ $t('register.Register') }}</button>
					</div>

					<div class="full">
						<router-link to="/login" class="link-left">{{ $t('register.Have_an_account') }}</router-link>
						<router-link to="/password" class="link-right">{{ $t('register.Forgot_password') }}</router-link>
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
