<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import ChangeTheme from '@/atomjoy/utils/ChangeTheme/ChangeTheme.vue'
import NotifyButton from '@/atomjoy/notify/Buttons/NotifyButton.vue'
import MessagesButton from '@/atomjoy/notify/Buttons/MessagesButton.vue'
import ProfilMenu from '@/atomjoy/notify/ProfilMenu/ProfilMenu.vue'
import Logo from './Logo.vue'
import AdminPanelButton from '@/atomjoy/notify/Buttons/AdminPanelButton.vue'

const auth = useAuthStore()
const logged = auth.isLoggedIn.value
const user = auth.getUser
let notify = ref(true)
let message = ref(false)

const avatar_path = ref(user.value.profile.avatar)
</script>

<template>
	<div class="topbar">
		<ProfilMenu :logged="logged" :profil="true" :avatar="avatar_path" :name="user.name" :email="user.email" />
		<div class="notify-box">
			<ChangeTheme />
			<NotifyButton :active="notify" @click="notify = !notify" />
			<MessagesButton :active="message" @click="message = !message" />
			<AdminPanelButton :active="true" />
		</div>
		<Logo />
	</div>
</template>

<style scoped>
.notify-box {
	float: right;
	margin-top: 7px;
}
.topbar {
	float: left;
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid var(--divider-primary);
}
</style>
