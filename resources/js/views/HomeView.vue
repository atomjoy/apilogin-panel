<script setup>
import { ref } from 'vue'
import TopMenu from '@/components/TopBar.vue'
import PageTitle from '@/atomjoy/utils/PageTitle/PageTitle.vue'
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import Select from '@/components/input/Select.vue'
import SelectPrefix from '@/components/input/SelectPrefix.vue'
import AvatarInput from '@/components/input/AvatarInput.vue'

let email = ref('')
let country = ref(48)
let code = ref(1)
let name = ref('Ala')
</script>

<template>
	<PageTitle :title="'page.Home'" />

	<TopMenu />

	<h1>{{ $t('page.Home') }}</h1>

	<div class="home-form">
		<form @submit.prevent="">
			<AvatarInput :avatar="'https://i.pravatar.cc/128'" :label="$t('Avatar')" />

			<Input name="email" v-model="email" :label="$t('login.Email_address')" placeholder="Email address" />

			<SelectPrefix name="prefix" v-model="country" :label="$t('register.Prefix')" />

			<Select
				name="code"
				v-model="code"
				:label="$t('Language')"
				:options="[
					{ key: 1, value: 'Php' },
					{ key: 2, value: 'Css' },
					{ key: 3, value: 'Html' },
					{ key: 4, value: 'JavaScript' },
				]" />

			<Select name="code" v-model="name" :label="$t('Language')" :options="['Ala', 'Ma', 'Kota']" />

			<Button :text="$t('docs.Subscribe')" />
		</form>
	</div>
</template>

<style>
.home-form {
	float: left;
	width: 100%;
	height: auto;
	min-height: 100vh;
	padding-bottom: 150px;
	background: var(--bg-primary);
}
.home-form form {
	display: block;
	width: 90%;
	max-width: 480px;
	margin: 0 auto;
}
</style>
