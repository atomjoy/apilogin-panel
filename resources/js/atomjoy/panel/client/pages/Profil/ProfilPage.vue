<script setup>
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import Textarea from '@/components/input/Textarea.vue'
import AvatarInput from '@/components/input/AvatarInput.vue'
import TitleH1 from '@/atomjoy/panel/client/components/Titles/TitleH1.vue'
import TitleH2 from '@/atomjoy/panel/client/components/Titles/TitleH2.vue'
import ErrorMessage from '@/atomjoy/panel/client/components/Error/ErrorMessage.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { onBeforeMount, computed, ref } from 'vue'

const auth = useAuthStore()
const user = auth.getUser

let name = ref('')
let username = ref('')
let location = ref('')
let bio = ref('')
let avatar = ref('')

let userName = computed({
	get() {
		return user.value?.profile?.name ?? ''
	},
	set(val) {
		name.value = val
	},
})

let userUsername = computed({
	get() {
		return user.value?.profile?.username ?? ''
	},
	set(val) {
		username.value = val
	},
})

let userLocation = computed({
	get() {
		return user.value?.profile?.location ?? ''
	},
	set(val) {
		location.value = val
	},
})

let userBio = computed({
	get() {
		return user.value?.profile?.bio ?? ''
	},
	set(val) {
		bio.value = val
	},
})

let userAvatar = computed({
	get() {
		return user.value?.profile?.avatar ?? ''
	},
	set(val) {
		avatar.value = val
	},
})

onBeforeMount(() => {
	auth.clearError()
})

function onSubmitAvatar(e) {
	auth.changeUserAvatar(new FormData(e.target))
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
		<AvatarInput :label="$t('Select image')" :avatar="userAvatar" />
		<Button :text="$t('Update')" />
	</form>

	<form @submit.prevent="onSubmitDetails" method="post" class="label-color">
		<TitleH2 :title="$t('Details')" />
		<Input name="name" :label="$t('Name')" v-model="userName" :placeholder="$t('Enter name')" />
		<Input name="username" :label="$t('Username')" v-model="userUsername" :placeholder="$t('Enter username')" />
		<Input name="location" :label="$t('Location')" v-model="userLocation" :placeholder="$t('Enter location')" />
		<Textarea name="bio" :label="$t('Bio')" v-model="userBio" :placeholder="$t('Enter bio')" />
		<Button :text="$t('Update')" />
	</form>
</template>

<style>
@import url('../../css/page.css');
</style>

<style scoped>
@import url('../../css/page-scoped.css');
</style>

<!-- Random avatar https://i.pravatar.cc/128 -->
