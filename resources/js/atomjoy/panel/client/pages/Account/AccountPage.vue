<script setup>
import Input from '@/components/input/Input.vue'
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

function onSubmitEmail(e) {
	auth.scrollTop()
	auth.changeUserEmail(new FormData(e.target))
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
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
