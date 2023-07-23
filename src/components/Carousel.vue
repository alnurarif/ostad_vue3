<script setup>

import { defineProps,defineEmits } from 'vue'

defineProps(['images','currentIndex'])

const emit = defineEmits(["prev", "next"])

const prevHandler = ()=> {
	emit("prev")
}
const nextHandler = ()=> {
	emit("next")
}

</script>

<template>
	<div class="carousel">
		<div class="slider" :style="`transform : translateX(-${currentIndex * 100}%)`">
			<div class="slide" v-for="(image, index) in images" :key="index">
				<img :src="image"/>
			</div>
		</div>
		<div class="controls">
			<button @click.prevent="prevHandler()" class="control prev">&#10094;</button>
			<button @click.prevent="nextHandler()" class="control next">&#10095;</button>
		</div>
	</div>
</template>



<style>

.carousel {
	position: relative;
	overflow: hidden;
}
.carousel img {
	width: 100%;
	height: auto;
	display: block;
}
.carousel .slider {
	display: flex;
	transition: transform 0.3s ease;
}
.carousel .slide {
	display: flex;
	flex: 0 0 100%;
}
.carousel .controls {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
}
.carousel .control {
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	font-size: 24px;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
	outline: none;
}
.carousel .control:hover {
	background-color: rgba(0, 0, 0, 0.8);
}

</style>