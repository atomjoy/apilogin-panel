<script setup>
import { onMounted, defineProps } from 'vue'

const props = defineProps({
	active: {
		type: Boolean,
		default: false,
	},
})

onMounted(() => {
	// console.log('Notify button')
})
</script>

<template>
	<div :class="{ 'notify-button': true }" :title="$t('Notifications')">
		<div class="notify-icon-active" v-if="props.active"></div>
		<div class="notify-icon">
			<slot>
				<svg width="24px" height="24px" viewBox="0 0 24.75 24.75">
					<path
						d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7048 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29476 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</slot>
		</div>
	</div>
</template>

<style scoped>
.notify-button {
	box-sizing: border-box;
	position: relative;
	float: right;
	margin: 5px;
	width: 44px;
	height: 44px;
	cursor: pointer;
	background: var(--bg-secondary);
	border-radius: var(--border-radius);
	border: 1px solid var(--divider-primary);
}
.notify-icon-active {
	position: absolute;
	z-index: 1;
	top: -5px;
	right: -5px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background: var(--accent-primary);
	box-shadow: 0px 1px 3px var(--accent-primary);
}
.notify-button .notify-icon {
	box-sizing: border-box;
	position: relative;
	float: left;
	width: 42px;
	height: 42px;
	background: var(--bg-primary);
	border-radius: var(--border-radius);
	border: 1px solid var(--bg-primary);
	transition: all 1s;
}
.notify-button .notify-icon svg {
	position: absolute;
	top: 10px;
	left: 10px;
	width: 20px;
	height: 20px;
	stroke-width: 1;
	fill: transparent !important;
	stroke: var(--text-primary) !important;
}
</style>

<!--
  import NotifyButton from '@/components/atomjoy/notify/NotifyButton.vue'
  let active_notify = ref(true)
	<NotifyButton :active="active_notify" @notify="active_notify = !active_notify" />
-->
