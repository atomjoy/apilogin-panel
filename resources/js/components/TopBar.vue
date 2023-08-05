<script setup>
import { RouterLink } from 'vue-router'
import ChangeTheme from '@/atomjoy/utils/ChangeTheme/ChangeTheme.vue'
import ChangeLocale from '@/atomjoy/utils/ChangeLocale/ChangeLocale.vue'
import ProfilMenu from '@/atomjoy/notify/ProfilMenu/ProfilMenu.vue'
import { useAuthStore } from '@/atomjoy/auth/stores/auth.js'

const auth = useAuthStore()
const logged = auth.isLoggedIn.value
const user = auth.getUser
</script>

<template>
	<div id="topbar-wrapper">
		<RouterLink to="/" class="menu-link">{{ $t('page.Home') }}</RouterLink>
		<RouterLink to="/about" class="menu-link">{{ $t('page.About') }}</RouterLink>

		<div class="right">
			<ChangeLocale />
			<ChangeTheme />
			<ProfilMenu :logged="logged" :profil="true" :name="user?.name" :email="user?.email" :avatar="user?.profile?.avatar" />
		</div>
	</div>
</template>

<style scoped>
#topbar-wrapper {
	float: left;
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid var(--divider-primary);
}
.menu-link {
	float: left;
	padding: 10px 15px;
	margin: 10px 5px;
	color: var(--accent-primary);
	border: 1px solid var(--accent-primary);
	border-radius: 30px;
}
.right {
	display: inline;
	float: right;
	display: flex;
	align-items: center;
}
</style>
