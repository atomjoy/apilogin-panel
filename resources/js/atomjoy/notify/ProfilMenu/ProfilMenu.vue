<script setup>
import { onMounted, defineProps, toRefs, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import ExitIcon from './icons/ExitIcon.vue'
import ChevronIcon from './icons/ChevronIcon.vue'
import ProfilIcon from './icons/ProfilIcon.vue'
import AccountIcon from './icons/AccountIcon.vue'
import SignInIcon from './icons/SignInIcon.vue'
import SignUpIcon from './icons/SignUpIcon.vue'
import avatar_default from '@/components/input/profil/avatar.png'

const props = defineProps({
	avatar: { type: String, default: avatar_default }, // https://i.pravatar.cc/128
	name: { type: String, default: '' },
	email: { type: String, default: '' },
	logged: { type: Boolean, default: false },
	open: { type: Boolean, default: false },
	profil: { type: Boolean, default: false },
})
const { t, locale } = useI18n({ useScope: 'global' })
const router = useRouter()
const { open } = toRefs(props)
const avatar_path = ref(null)

if (props.avatar) {
	avatar_path.value = '/storage/' + props.avatar
} else {
	avatar_path.value = avatar_default
}

function defImage(e) {
	e.onerror = null
	e.target.src = avatar_default
}

onMounted(() => {})
</script>
<template>
	<div class="user-login-btn">
		<div class="sign-in" v-if="!props.logged" @click="router.push('/login')">
			<span class="text">{{ t('SignIn') }}</span>
			<SignInIcon />
		</div>

		<div class="sign-up" v-if="!props.logged" @click="router.push('/register')">
			<span class="text">{{ t('SignUp') }}</span>
			<SignUpIcon />
		</div>

		<div class="logged-user" v-if="props.logged" @click="open = !open">
			<div class="user-profil">
				<div class="user-info user-info-mobile" v-if="profil">
					<div class="name">
						<strong>{{ props.name }}</strong>
					</div>
					<div class="title">
						<small>{{ props.email }}</small>
					</div>
				</div>

				<div class="user-image">
					<img :src="avatar_path" @error="defImage" />
					<div :class="{ 'open-icon': true, 'close-icon': open }"><ChevronIcon /></div>
				</div>
			</div>

			<div class="user-menu" v-if="open">
				<router-link to="/panel/profil" class="link-mini">
					<ProfilIcon />
					{{ t('Profile') }}
				</router-link>

				<router-link to="/panel/account" class="link-mini">
					<AccountIcon />
					{{ t('Account') }}
				</router-link>

				<div class="footer">
					<router-link to="/logout" class="link-mini">
						<ExitIcon />
						{{ t('Logout') }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.user-login-btn {
	float: right;
}

.sign-in {
	float: right;
	margin: 5px;
	padding: 10px 15px;
	color: var(--bg-primary);
	background: var(--accent-primary);
	border: 1px solid var(--accent-primary);
	border-radius: var(--border-radius);
	cursor: pointer;
}

.sign-in > * {
	float: left;
}

.sign-in svg {
	width: 20px;
	height: 20px;
	margin-left: 10px;
	fill: none;
	stroke: var(--bg-primary);
}

.sign-in:hover {
	background: var(--accent-secondary);
}

.sign-up {
	float: right;
	margin: 5px;
	padding: 10px 15px;
	color: var(--accent-primary);
	border: 1px solid var(--accent-primary);
	border-radius: var(--border-radius);
	cursor: pointer;
}

.sign-up > * {
	float: left;
}

.sign-up svg {
	width: 20px;
	height: 20px;
	margin-left: 10px;
	fill: transparent;
	stroke-width: 2;
	stroke: var(--accent-primary);
}

.logged-user {
	display: inline-block;
	position: relative;
	margin-left: 10px;
}

.user-profil {
	float: right;
	display: flex;
	align-items: center;
}

.user-info {
	text-align: left;
	margin-right: 10px;
}

.user-menu {
	position: absolute;
	width: 200px;
	height: auto;
	top: 65px;
	right: 0px;
	padding: 10px;
	background: var(--bg-primary);
	border-radius: var(--border-radius);
	border: 1px solid var(--divider-primary);
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	z-index: 2;
}

.user-menu .footer {
	float: left;
	width: 100%;
	margin-top: 5px;
	padding-top: 5px;
	border-top: 1px solid var(--divider-primary);
}
.user-menu a.link-mini {
	display: flex;
	float: left;
	width: 100%;
	padding: 10px;
	text-align: left;
	color: var(--text-primary);
	border-radius: var(--border-radius);
}

.user-menu a.link-mini svg {
	margin-right: 10px;
	fill: var(--accent-primary);
	/* stroke: var(--accent-primary); */
}

.user-menu a.link-mini:hover {
	background: var(--bg-secondary);
}

.user-image {
	position: relative;
	box-sizing: border-box;
	float: right;
	width: 60px;
	height: 60px;
	padding: 2px;
	cursor: pointer;
	border-radius: 50%;
	border: 2px solid var(--accent-primary);
}
.user-image img {
	display: inline;
	float: right;
	width: 52px;
	height: 52px;
	border-radius: 50%;
}
.open-icon {
	position: absolute;
	bottom: -5px;
	right: -5px;
	padding: 2px;
	width: 24px;
	height: 24px;
	background: var(--accent-primary);
	border: 3px solid var(--bg-primary);
	overflow: hidden;
	border-radius: 50%;
	transition: all 0.6s;
	z-index: 1;
}
.open-icon svg {
	width: 17px;
	height: 17px;
	stroke: #fff;
	border-radius: 50%;
}
.user-image:hover .open-icon {
	background: #55cc55;
}

.close-icon {
	transform: rotate(180deg) !important;
}

@media (max-width: 640px) {
	.user-info-mobile {
		display: none !important;
	}
}
</style>
