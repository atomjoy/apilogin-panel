<script setup>
import { useRouter, useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from './stores/auth.js'
import PageTitle from './widget/PageTitle.vue'
import ChangeLocale from './widget/ChangeLocale.vue'
import PolicyBar from './PolicyBar.vue'
import AuthLogo from './AuthLogo.vue'
import Input from '@/components/input/Input.vue'
import Checkbox from '@/components/input/Checkbox.vue'

const { locale } = useI18n({ useScope: 'global' })
const store = useAuthStore()
let code = ref('')
let remember_me = ref(false)

// Route
const route = useRoute()
let hash = ref(route?.params?.hash ?? null)
// console.log('Route', route?.query, route?.params)

onMounted(() => {
	store.clearError()
	store.changeLocale(locale.value)
})

function onSubmit(e) {
	store.scrollTop()
	store.loginUserF2aAdmin(new FormData(e.target))
}
</script>

<template>
	<PageTitle :title="$t('message.login_f2a_title')" />

	<div id="page-wraper">
		<div class="page-auth">
			<div class="top-bar">
				<AuthLogo />
				<ChangeLocale />
			</div>
			<div class="form-wraper">
				<form @submit.prevent="onSubmit" class="form-auth">
					<h1 class="full">{{ $t('login.F2a_Confirm') }} {{ $t('login.Admin', 'Admin') }}</h1>

					<div v-if="store?.getMessage?.value != null" :class="[store?.getError?.value ? 'alert-error' : 'alert-info', 'animate__animated animate__flipInX']">{{ store?.getMessage?.value }}</div>

					<Input :focus="'true'" type="text" name="code" v-model="code" :placeholder="$t('login.F2a_code_eg')" :label="$t('login.F2a_code')">
						<i class="far fa-envelope"></i>
					</Input>

					<input type="hidden" name="hash" v-model="hash" />

					<div class="full">
						<Checkbox :label="$t('login.Remember_me')" value="1" v-model="remember_me" name="remember_me" />
					</div>

					<button class="button" :title="$t('login.Login')" ref="button">{{ $t('login.Login') }}</button>

					<div class="full">
						<router-link to="/admin/password" class="link-left">{{ $t('login.Forgot_password') }}</router-link>
						<!-- <router-link to="/admin/register" class="link-right">{{ $t('login.Dont_have_an_account') }}</router-link> -->
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
