<script setup>
import TopMenu from '@/components/TopBar.vue'
import PageTitle from '@/atomjoy/utils/PageTitle/PageTitle.vue'
</script>

<template>
	<PageTitle :title="'page.Home'" />
	<TopMenu />

	<h1>404</h1>
	<h2>{{ $t('error404.title') }}</h2>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');

h1 {
	float: left;
	width: 100%;
	font-weight: 900;
	font-size: 180px;
	color: #fff;
	text-align: center;
	position: relative;
	z-index: 1;
	margin-top: 30px;
	margin-bottom: 10px;
	font-family: 'Carter One', cursive;
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}
h1::before {
	position: absolute;
	content: '404';
	font-weight: 900;
	font-size: 180px;
	color: var(--accent-primary);
	text-align: center;
	z-index: 0;
	transform: skewX(12deg);
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}
h1::after {
	position: absolute;
	content: '404';
	font-weight: 900;
	font-size: 180px;
	color: #f23;
	text-align: center;
	z-index: -1;
	transform: skewX(-12deg) translateX(-400px);
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}
h2 {
	float: left;
	width: 100%;
	font-weight: 900;
	font-size: 50px;
	color: #f23;
	text-align: center;
	position: relative;
}
h2::before {
	position: absolute;
	content: 'Page not found!';
	font-weight: 900;
	font-size: 50px;
	color: #222;
	text-align: center;
	transform: skewX(12deg);
}
</style>
