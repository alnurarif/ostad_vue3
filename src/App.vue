<script setup>
import { ref, computed } from 'vue'
import Carousel from './components/Carousel.vue';
import CarouselBottom from './components/CarouselBottom.vue';
import { imagesInfo } from './data/pageData';


const images = imagesInfo;

const currentIndex = ref(0);

const prev = () => {
	currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const next = () => {
	currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const selectIndex = (index) => {
	currentIndex.value = index
}

</script>

<template>
	<div class="app">
		<h2 class="main_head_text">Vue Carousel</h2>
		<div class="carousel_wrapper">
			<Carousel 
			:images="images" 
			:currentIndex="currentIndex" 
			@prev="prev" 
			@next="next"/>
		</div>
		<CarouselBottom 
		:images="images" 
		:currentIndex="currentIndex" 
		@selectIndex="selectIndex"/>
	</div>
</template>


<style>

.app {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
}
.main_head_text{
	text-align: center;
}
/* Mobile responsiveness */
@media (max-width: 768px) {
.app {
	max-width: 100%;
}
}
.carousel_wrapper{
	padding: 10px;
	border: 1px solid #cccccc;
	border-radius: 10px;
	box-shadow: 0px 0px 10px #b3b3b3;
}

</style>