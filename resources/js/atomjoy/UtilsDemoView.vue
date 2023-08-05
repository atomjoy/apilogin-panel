<script setup>
import { ref } from 'vue'
import ChangeTheme from '@/atomjoy/utils/ChangeTheme/ChangeTheme.vue'
import ChangeTitle from '@/atomjoy/utils/ChangeTitle/ChangeTitle.vue'
import ChangeLocale from '@/atomjoy/utils/ChangeLocale/ChangeLocale.vue'
import NotifyButton from '@/atomjoy/notify/Buttons/NotifyButton.vue'
import MessagesButton from '@/atomjoy/notify/Buttons/MessagesButton.vue'
import LogoutButton from '@/atomjoy/notify/Buttons/LogoutButton.vue'
import ProfilMenu from '@/atomjoy/notify/ProfilMenu/ProfilMenu.vue'

let notify = ref(true)
let message = ref(false)
</script>

<template>
	<center class="full">
		<ProfilMenu :logged="true" :profil="true" :name="'Alex Koss'" :email="'email@gmail.com'" />
		<ProfilMenu :logged="false" />
		<LogoutButton />
		<ChangeTitle title="Homepage" />
		<ChangeTheme />
		<ChangeLocale />
		<NotifyButton :active="notify" @click="notify = !notify" />
		<MessagesButton :active="message" @click="message = !message" />
	</center>
</template>

<style scoped>
.full {
	float: left;
	width: 100%;
	height: auto;
	padding: 20px;
}
</style>
