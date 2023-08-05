<script setup></script>

<template>
	<div id="admin-panel">
		<div id="navbar-wrapper">
			<slot name="navbar"></slot>
		</div>

		<div id="page-wrapper">
			<div id="topbar-wrapper">
				<slot name="topbar"></slot>
			</div>

			<div id="content-wrapper">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style>
@import url('./css/panel.css');
</style>
