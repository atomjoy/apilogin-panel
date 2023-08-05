<script setup>
import PanelSlot from '@/atomjoy/panel/client/slots/PanelSlot.vue'
import NavbarSlot from '@/atomjoy/panel/client/slots/NavbarSlot.vue'
import NavbarLinks from '@/atomjoy/panel/client/components/Navbar/NavbarLinks.vue'
import Topbar from '@/atomjoy/panel/client/components/Topbar/Topbar.vue'
import Page from '@/atomjoy/panel/client/pages/Orders/SingleOrderPage.vue'
import PageTitle from '@/atomjoy/utils/PageTitle/PageTitle.vue'
</script>

<template>
	<PageTitle :title="$t('Order details')" />

	<PanelSlot>
		<template #topbar>
			<Topbar />
		</template>

		<template #navbar>
			<NavbarSlot>
				<NavbarLinks />
			</NavbarSlot>
		</template>

		<template #default>
			<Page />
		</template>
	</PanelSlot>
</template>
