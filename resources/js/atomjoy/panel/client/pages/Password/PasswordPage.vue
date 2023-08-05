<script setup>
import Password from '@/components/input/Password.vue'
import Button from '@/components/input/Button.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, onMounted, ref } from 'vue'

const auth = useAuthStore()
let password = ref('')
let password_current = ref('')
let password_confirmation = ref('')

onBeforeMount(() => {
	auth.clearError()
})

function onSubmit(e) {
	auth.scrollTop()
	auth.changeUserPassword(new FormData(e.target))
}
</script>

<template>
	<TitleH1 :title="$t('Password')" :description="$t('Here you can change your password.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmit" method="post" class="label-color">
		<TitleH2 :title="$t('Change password')" />
		<Password name="password_current" :label="$t('Current password')" v-model="password_current" />
		<Password name="password" :label="$t('New password')" v-model="password" />
		<Password name="password_confirmation" :label="$t('Confirm password')" v-model="password_confirmation" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
