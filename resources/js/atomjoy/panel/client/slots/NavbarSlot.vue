<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ChevronIcon from '@/atomjoy/icons/ChevronIcon.vue'
import MenuIcon from '@/atomjoy/icons/MenuIcon.vue'
const open = ref(false)
</script>

<template>
	<div id="client-navbar">
		<div class="mobile-menu-wrapper">
			<div id="mobile-menu" @click="open = !open"><MenuIcon class="menu-icon" /> Menu <ChevronIcon :class="{ 'chevron-icon': true, 'chevron-rotate': open }" /></div>
			<div id="mobile-menu-links" :class="{ 'hide-links': !open }">
				<div id="mobile-menu-links-scroll">
					<slot></slot>
				</div>
			</div>
		</div>

		<slot name="footer">
			<div class="footer-links">
				<RouterLink to="/admin/panel" class="link-admin-dashboard"> {{ $t('Go to admin panel') }} </RouterLink>
			</div>
		</slot>
	</div>
</template>

<style scoped>
#client-navbar {
	display: block;
}

#mobile-menu {
	display: none;
	float: left;
	width: 100%;
}

.link-admin-dashboard {
	float: left;
	width: 100%;
	padding: 15px 25px;
	text-align: center;
	font-weight: 700;
	color: #fff;
	background: #73c931;
	border-radius: 25px;
	margin-block: 20px;
}

.chevron-icon {
	float: right;
	transition: all 0.3s;
	stroke: var(--label-primary);
}

.chevron-rotate {
	transform: rotate(180deg);
}

.menu-icon {
	float: left;
	margin-right: 20px;
	fill: var(--label-primary);
	stroke: var(--label-primary);
}

@media all and (max-width: 768px) {
	#client-navbar {
		position: relative;
		display: block;
		min-width: 100%;
	}

	#mobile-menu {
		display: inherit;
		padding: 20px;
		margin-bottom: 20px;
		font-weight: 700;
		color: var(--text-primary);
		border-radius: var(--border-radius);
		border: 1px solid var(--divider-primary);
		z-index: 10;
		cursor: pointer;
	}

	#mobile-menu-links {
		position: absolute;
		color: var(--label-primary);
		display: flex;
		top: 70px;
		left: 0px;
		width: 100%;
		min-height: 300px;
		max-height: 300px;
		padding: 20px;
		background: var(--bg-primary);
		border: 1px solid var(--divider-primary);
		border-radius: var(--border-radius);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
		z-index: 10;
	}

	#mobile-menu-links-scroll {
		float: left;
		width: 100%;
		height: auto;
		min-height: calc(100% - 40px);
		max-height: calc(100% - 40px);
		padding-right: 10px;
		overflow-x: hidden;
		overflow-y: scroll;
		scrollbar-width: thin;
		scrollbar-color: var(--accent-secondary) var(--bg-secondary);
	}

	#mobile-menu-links-scroll::-webkit-scrollbar {
		width: 8px;
		background: var(--bg-secondary);
	}

	#mobile-menu-links-scroll::-webkit-scrollbar-thumb {
		background: var(--accent-secondary);
	}

	.hide-links {
		display: none !important;
	}
}
</style>
