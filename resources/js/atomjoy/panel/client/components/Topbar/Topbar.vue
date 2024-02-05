<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'
import { useNotifyStore } from '@/atomjoy/notify/NotifyPanel/stores/notify-panel.js'
import ChangeTheme from '@/atomjoy/utils/ChangeTheme/ChangeTheme.vue'
import NotifyButton from '@/atomjoy/notify/Buttons/NotifyButton.vue'
import MessagesButton from '@/atomjoy/notify/Buttons/MessagesButton.vue'
import ProfilMenu from '@/atomjoy/notify/ProfilMenu/ProfilMenu.vue'
import Logo from './Logo.vue'
import AdminPanelButton from '@/atomjoy/notify/Buttons/AdminPanelButton.vue'
import NotifyPanel from '@/atomjoy/notify/NotifyPanel/NotifyPanel.vue'

const auth = useAuthStore()
const logged = auth.isLoggedIn.value
const user = auth.getUser
const avatar_path = ref(user.value.profile.avatar)
const message = ref(false)
const notify = useNotifyStore()
</script>

<template>
	<div class="topbar">
		<ProfilMenu :logged="logged" :profil="true" :avatar="avatar_path" :name="user.name" :email="user.email" />
		<div class="notify-box">
			<ChangeTheme />
			<AdminPanelButton v-if="user.is_admin" :active="false" />
			<MessagesButton :active="message" @click="message = !message" />
			<NotifyButton :active="notify.unread > 0" @click="notify.toggleOpen" />
			<NotifyPanel />
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
