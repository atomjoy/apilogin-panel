<script setup></script>

<template>
	<div id="client-panel">
		<div id="topbar-wrapper">
			<slot name="topbar"></slot>
		</div>

		<div id="page-wrapper">
			<div id="navbar-wrapper">
				<slot name="navbar"></slot>
			</div>

			<div id="content-wrapper">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
#client-panel {
	float: left;
	width: 100%;
	height: auto;
	overflow: hidden;
	background: var(--bg-primary);
}
#page-wrapper {
	margin: 120px auto;
	display: flex;
	padding: 30px;
	width: 90%;
	max-width: 1123px;
	border: 1px solid var(--divider-primary);
	border-radius: var(--border-radius);
}
#topbar-wrapper {
	padding: 10px;
	color: var(--text-primary);
	background: var(--bg-primary);
}
#navbar-wrapper {
	float: left;
	min-width: 260px;
	max-width: 260px;
	height: auto;
	margin-right: 30px;
	color: var(--text-primary);
}
#content-wrapper {
	float: left;
	width: 100%;
	max-width: calc(100% - 290px);
	padding-left: 30px;
	border-left: 1px solid var(--divider-primary);
}
@media all and (max-width: 1366px) {
	#page-wrapper {
		max-width: 968px;
	}
}
@media all and (max-width: 768px) {
	#page-wrapper {
		display: block;
		float: left;
		width: 90%;
		height: auto;
		margin-left: 5%;
	}
	#navbar-wrapper {
		position: relative;
		display: block;
		min-width: 100%;
		max-width: 100%;
	}
	#content-wrapper {
		border-left: none;
		padding-left: 0px;
		max-width: 100%;
	}
}
</style>
