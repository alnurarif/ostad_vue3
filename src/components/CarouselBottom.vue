<script setup>

import { defineProps,defineEmits } from 'vue'

defineProps(['images','currentIndex'])

const emit = defineEmits(['selectIndex'])

const selectThisImage = (index) => {
	emit('selectIndex', index)
}

</script>

<template>
	<div class="thumbnails-container" >
		<div class="thumbnail" v-for="(image, index) in images" :key="index" :style="{ opacity : index == currentIndex ? `1` :  `.5`, height : index == currentIndex ? `60px` :  `50px`}"  @click="selectThisImage(index)">
			<img :src="image"/>
		</div>
	</div>
</template>

<style>

.thumbnails-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.thumbnail {
	/* flex: 0 0 calc(11.5% - 5px); */ /* Adjust the width as needed */
	width : 10.5%;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #ccc;
	padding: 5px;
	box-sizing: border-box;
	border-radius : 5px;
	cursor: pointer;
}
.thumbnail img {
	max-width: 100%;
	max-height: 100%;
	height: inherit;
}

</style>