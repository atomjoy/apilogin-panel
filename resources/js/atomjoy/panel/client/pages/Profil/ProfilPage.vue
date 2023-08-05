<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import Textarea from '@/components/input/Textarea.vue'
import AvatarInput from '@/components/input/AvatarInput.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, onMounted, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser
console.log(user)

const avatar_path = ref(user.value.profile.avatar)

onBeforeMount(() => {
	auth.clearError()
})

// https://i.pravatar.cc/128

function onSubmitAvatar(e) {
	let data = new FormData(e.target)
	// for (var pair of data.entries()) {
	// 	console.log('Input key:', pair[0], 'Value:', pair[1])
	// }
	// axios request here send to server
	auth.changeUserAvatar(data)
	auth.scrollTop()
}

function onSubmitDetails(e) {
	let data = new FormData(e.target)
	// for (var pair of data.entries()) {
	// 	console.log('Input key:', pair[0], 'Value:', pair[1])
	// }
	// axios request here send to server
	auth.changeUserProfil(data)
	auth.scrollTop()
}
</script>

<template>
	<TitleH1 :title="$t('Profile')" :description="$t('Update your profile details here.')" />

	<ErrorMessage />

	<form @submit.prevent="onSubmitAvatar" method="post" enctype="multipart/form-data" class="label-color">
		<TitleH2 :title="$t('Avatar')" />
		<AvatarInput :label="$t('Select image')" :avatar="avatar_path" />
		<Button :text="$t('Update')" />
	</form>

	<form @submit.prevent="onSubmitDetails" method="post" class="label-color">
		<TitleH2 :title="$t('Details')" />
		<Input name="name" :label="$t('Name')" v-model="user.profile.name" />
		<Input name="username" :label="$t('Username')" v-model="user.profile.username" />
		<Input name="location" :label="$t('Location')" v-model="user.profile.location" />
		<Textarea name="bio" :label="$t('Bio')" v-model="user.profile.bio" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>
