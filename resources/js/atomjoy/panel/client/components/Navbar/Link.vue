<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
	to: { default: '/panel/profil' },
	text: { default: 'Edit Profil' },
	danger: false,
})

function closeMenu() {
	document.querySelector('#mobile-menu').click()
}
</script>

<template>
	<RouterLink :to="props.to" :class="{ link: true, 'link-danger': props.danger }" @click="closeMenu">
		<slot>
			<ProfilIcon />
		</slot>
		{{ $t(props.text) }}
	</RouterLink>
</template>
