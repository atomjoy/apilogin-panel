<script setup>
import Password from '@/components/input/Password.vue'
import Button from '@/components/input/Button.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, onMounted, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser

onBeforeMount(() => {
	auth.clearError()
})

function onSubmit(e) {
	auth.scrollTop()
	auth.deleteUserAccount(new FormData(e.target))
}
</script>

<template>
	<TitleH1 :title="$t('Account')" :description="$t('You can delete your account here.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmit" method="post" class="label-color">
		<TitleH2 :title="$t('Delete Account')" :description="$t('Your account and all your data will be deleted.')" />
		<Password name="current_password" :placeholder="$t('Enter current password')" :label="$t('Current password')" />
		<Button :text="$t('Delete Account Now!')" class="delete-button" />
	</form>
</template>

<style scoped>
.delete-button {
	font-weight: 900;
	color: #fff !important;
	background: #f41a2c !important;
	border-color: #f41a2c !important;
}
.delete-button:hover {
	box-shadow: 0px 5px 10px #f41a2c33;
}
</style>
