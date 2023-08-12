<script setup>
import { onMounted } from 'vue'
import { useNotifyStore } from './stores/notify-panel.js'
import BellIcon from './icons/BellIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import RemoveIcon from './icons/RemoveIcon.vue'
import MarkIcon from './icons/MarkIcon.vue'
import RefreshIcon from './icons/RefreshIcon.vue'

const store = useNotifyStore()

onMounted(async () => {
	await store.loadPage()
})

function readAll() {
	store.markAsReadAll()
	// document.querySelectorAll('.notify-item').forEach((e) => {
	// 	e.classList.add('notify-item-read')
	// })
}

function nextPage() {
	store.loadPage()
}

function deleteNotify(id) {
	store.deleteNotification(id)
	document.querySelector('#item-' + id).remove()
}
</script>

<template>
	<div id="notifications-wrapper" v-if="store.open">
		<div class="notify-top">
			<div class="notify-title">
				{{ $t('Notifications') }}
				<CloseIcon class="close-icon" @click="store.toggleOpen" />
			</div>
		</div>

		<div class="notify-messages scrollbar">
			<div class="empty-notify" v-if="store.items.size == 0">
				{{ $t('List is empty.') }}
			</div>

			<div v-for="item of store.items.values()" :key="item.id">
				<div
					:id="'item-' + item.id"
					:class="{
						'notify-item': true,
						'notify-item-read': item.read_at != null,
					}">
					<div class="notify-item-dot"></div>
					<div class="item-top">
						<div class="notify-icon">
							<BellIcon />
						</div>

						<div class="notify-author">
							<div class="person">
								<strong>{{ $t('Office Bot') }}</strong>
							</div>
							<div class="date">{{ item.formatted_created_at }}</div>
						</div>

						<RemoveIcon class="del-icon" @click="deleteNotify(item.id)" />
					</div>

					<div class="item-msg">{{ item.data.message }}</div>

					<div class="item-links" v-if="item.data.links.length > 0">
						<a v-for="link of item.data.links" :href="link.href" class="link-empty" target="_blank">{{ link.text }}</a>
					</div>
				</div>
			</div>
		</div>

		<div class="item-bot">
			<div class="readall" @click="readAll">
				<MarkIcon /><span>{{ $t('Mark all as read') }}</span>
			</div>
			<div class="load" @click="nextPage">
				<RefreshIcon /><span>{{ $t('Load more') }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.empty-notify {
	float: left;
	width: 100%;
	padding: 20px;
	font-weight: 700;
	text-align: center;
	color: #7a899f;
	background: #f3f4f6;
}
#notifications-wrapper {
	position: fixed;
	top: 0px;
	right: 0px;
	height: 100vh;
	width: 90%;
	max-width: 460px;
	z-index: 100;
	background: var(--bg-primary);
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
	border: 1px solid var(--divider-primary);
	display: flex;
	flex-direction: column;
}

.notify-messages {
	height: 100%;
	overflow-y: auto;
	scrollbar-width: thin;
}

.notify-title {
	font-weight: 900;
	font-size: 20px;
}

.notify-item {
	position: relative;
	float: left;
	width: 100%;
	height: auto;
	padding: 15px;
	font-size: 14px;
	border-bottom: 1px solid var(--divider-primary);
}

.notify-item:hover {
	background: var(--bg-secondary);
}

.notify-item-dot {
	position: absolute;
	top: 20px;
	left: -1px;
	width: 5px;
	height: 30px;
	background: var(--accent-primary);
	border: 1px solid var(--divider-primary);
}

.notify-item-read .notify-item-dot {
	background: var(--bg-primary) !important;
}

.item-top {
	display: flex;
	float: left;
	width: 100%;
	margin-bottom: 10px;
}

.notify-author {
	float: left;
	width: 100%;
	font-size: 15px;
}

.notify-author .person {
	font-size: 14px;
}

.notify-author .date {
	font-size: 12px;
	color: #7a899f;
}

.item-msg {
	float: left;
	width: 100%;
	margin-bottom: 10px;
	padding: 15px;
	font-weight: 300;
	font-size: 14px;
	color: var(--text-primary);
	background: var(--bg-primary);
	border-radius: var(--border-radius);
	border: 1px solid var(--divider-primary);
}

.item-links {
	float: left;
	width: 100%;
	height: auto;
	margin: 5px 0px;
	padding: 5px 0px;
}

.item-links .link {
	padding: 9px 15px;
	margin-right: 5px;
	font-size: 12px;
	color: #fff;
	background: var(--accent-primary);
	border-radius: var(--border-radius);
	border: 1px solid var(--accent-primary);
}

.item-links .link-empty {
	padding: 9px 15px;
	margin-right: 5px;
	font-size: 12px;
	color: var(--accent-primary);
	border-radius: var(--border-radius);
	background: var(--accent-primary-alpha);
	border: 1px solid var(--accent-primary);
}

.item-bot {
	float: left;
	width: 100%;
	height: auto;
	padding: 10px;
	border-top: 1px solid var(--divider-primary);
}

.item-bot .readall {
	display: flex;
	float: left;
	padding: 10px;
	margin-right: 10px;
	font-size: 12px;
	color: var(--accent-primary);
	border-radius: var(--border-radius);
	cursor: pointer;
}

.item-bot .readall svg {
	fill: var(--accent-primary);
	margin-right: 5px;
	height: 20px;
	width: 20px;
}

.item-bot .load {
	display: flex;
	float: right;
	padding: 10px 15px;
	margin-left: 10px;
	font-size: 12px;
	font-weight: 700;
	color: var(--text-primary);
	background: var(--bg-secondary);
	border-radius: var(--border-radius);
	cursor: pointer;
}

.item-bot .load svg {
	fill: #7a899f;
	margin-right: 5px;
	height: 20px;
	width: 20px;
}

.item-bot .load:hover {
	color: var(--accent-primary);
	background: var(--accent-primary-alpha);
}
.item-bot .load:hover svg {
	fill: var(--accent-primary);
}

.notify-icon {
	float: left;
	width: 40px;
	height: 40px;
	padding: 8px 10px;
	margin-right: 10px;
	background: var(--accent-primary-alpha);
	border: 1px solid var(--accent-primary);
	border-radius: var(--border-radius);
}

.notify-icon svg {
	fill: var(--accent-primary);
	stroke-width: 2;
}

.notify-top {
	padding: 10px 15px;
	border-bottom: 1px solid var(--divider-primary);
}

.close-icon {
	float: right;
	margin-top: 5px;
	fill: #7a899f;
}

.del-icon {
	float: right;
	fill: #7a899f;
}

.close-icon:hover {
	fill: #f23;
	cursor: pointer;
}

.del-icon:hover {
	fill: #f23;
	cursor: pointer;
}

.scrollbar {
	scrollbar-width: thin;
	scrollbar-color: var(--accent-secondary) var(--bg-secondary);
}

.scrollbar::-webkit-scrollbar {
	width: 8px;
	background: var(--bg-secondary);
}

.scrollbar::-webkit-scrollbar-thumb {
	background: var(--accent-secondary);
}
</style>
