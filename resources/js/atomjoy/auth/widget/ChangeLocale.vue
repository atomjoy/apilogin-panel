<!--
// https://vue-i18n.intlify.dev/guide/advanced/composition.html#global-scope
// Add in main i18n options main.js

import { createI18n } from 'vue-i18n'

const lang = {
  // Allow compositions api (required)
  allowComposition: true,
  globalInjection: true,
  legacy: false,

  // Locales
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'pl'],
  messages: {
    en: { en: "English", pl: "Polish" },
    pl: { en: "Angielski", pl: "Polski" },
  },
}

const i18n = createI18n(lang)
app.use(i18n)
-->

<template>
	<div class="locale-changer">
		<select v-model="locale" class="locale-changer-select">
			<option v-for="lang in availableLocales" :key="`locale-${lang}`" :value="lang">{{ t(lang) }}</option>
		</select>
	</div>
</template>

<script setup>
import { watch, computed, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth.js'
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n({ useScope: 'global' })
const store = useAuthStore()

onMounted(() => {
	console.log('Current locale', locale.value, availableLocales)
})

watch(
	() => locale.value,
	(lang) => {
		console.log('Changed locale', lang)
		store.changeLocale(lang)
	}
)

const msg = computed(() => t('example.msg'))
</script>

<style scoped>
.locale-changer {
	float: right;
	width: auto;
	height: auto;
	padding: 5px;
}
.locale-changer-select {
	float: right;
	display: inline;
	text-align: center;
	font-size: 0.9rem;
	border: 0px;
	background: transparent;
	padding: 5px 15px;
	cursor: pointer;
}
.locale-changer-select > option {
	background: #fff;
	color: #222;
}
.locale-changer-select:focus {
	box-shadow: none;
}
</style>
