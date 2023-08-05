<script setup>
import Link from './Link.vue'
import AccountIcon from '@/atomjoy/icons/AccountIcon.vue'
import DeleteBox from '@/atomjoy/icons/DeleteBoxIcon.vue'
import OrderBoxIcon from '@/atomjoy/icons/OrderBoxIcon.vue'
import ProfilIcon from '@/atomjoy/icons/ProfilIcon.vue'
import PasswordIcon from '@/atomjoy/icons/PasswordIcon.vue'
import LocationIcon from '@/atomjoy/icons/LocationIcon.vue'
// import BellIcon from '@/atomjoy/icons/BellIcon.vue'
// import EmailIcon from '@/atomjoy/icons/EmailIcon.vue'

function closeMenu() {
	document.querySelector('#mobile-menu').click()
}
</script>

<template>
	<Link to="/panel/profil" text="Edit Profil"> <ProfilIcon /> </Link>
	<Link to="/panel/account" text="Account"> <AccountIcon /> </Link>
	<Link to="/panel/password" text="Password"> <PasswordIcon /> </Link>
	<Link to="/panel/address" text="Address"> <LocationIcon /> </Link>
	<Link to="/panel/orders" text="Orders"> <OrderBoxIcon /> </Link>
	<!-- <Link to="/panel/messages" text="Messages"> <EmailIcon /> </Link>
	<Link to="/panel/notifications" text="Notifications"> <BellIcon /> </Link> -->
	<div class="divider"></div>
	<Link to="/panel/account/delete" text="Delete Account" :danger="true"> <DeleteBox /> </Link>
</template>

<style scoped>
.divider {
	float: left;
	width: 100%;
	margin: 10px;
	border-top: 1px dashed var(--divider-primary);
}
.link {
	display: flex;
	float: left;
	width: 100%;
	margin-bottom: 5px;
	padding: 15px 15px;
	font-weight: 700;
	color: var(--text-primary); /* var(--text-primary); #6E7477; #4b5357; #7e7e90; */
	border-radius: var(--border-radius);
	border: 2px solid transparent;
	transition: all 0.6s;
}
.link svg {
	margin-right: 10px;
	width: 24px;
	height: 24px;
	fill: var(--icon-primary);
}
.link:hover {
	color: var(--accent-primary);
}
.link:hover svg {
	fill: var(--accent-primary);
}
.link-danger,
.link-danger svg {
	color: #f23;
	fill: #f23;
}
.link-danger:hover {
	background: #ff223311;
	color: #f23;
}
.link-danger:hover svg {
	fill: #f23;
}
.router-link-active {
	color: var(--accent-primary) !important;
	border: 2px solid var(--accent-primary);
	border-radius: var(--border-radius);
	font-weight: 900;
}
.router-link-active svg {
	fill: var(--accent-primary) !important;
}
</style>
