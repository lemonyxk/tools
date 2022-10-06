<template>
	<div class="title-bar">
		<img :src="close" @click="onClose" class="close" />
		<div>{{ props.title }}</div>
		<img v-if="isPin" :src="pined" @click="onPin" class="pin" />
		<img v-else :src="pin" @click="onPin" class="pin" />
	</div>
</template>

<script setup>
import pin from "@/assets/pin.svg";
import pined from "@/assets/pined.svg";
import close from "@/assets/close.svg";
import { defineProps, ref } from "vue";
import { useRoute } from "vue-router";
const { ipcRenderer } = window.require("electron");

var props = defineProps({
	title: String,
});

var isPin = ref(false);

var onPin = () => {
	isPin.value = !isPin.value;
	ipcRenderer.send("top-window");
};

var onClose = () => {
	ipcRenderer.send("hide-window");
};

//
</script>

<style scoped lang="scss">
.title-bar {
	-webkit-user-select: none;
	-webkit-app-region: drag;

	height: 24px;
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: #e8e8e8;

	.pin {
		height: 14px;
		width: 14px;
		margin: 0 8px;
	}

	.close {
		height: 10px;
		width: 10px;
		margin: 0 8px;
	}

	img:hover {
		scale: 0.9;
	}
}
</style>
