<script setup>
import dayjs from "dayjs";
import { onUnmounted, ref } from "vue";

var now = ref(Date.now());

var t = setInterval(() => {
	now.value = Date.now();
}, 1000);

var timestamp = ref(parseInt(Date.now() / 1000));

var date = ref(dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss"));

var onTimestampChange = () => {
	var r = timestamp.value;
	if (r.toString().length > 10) {
		r = parseInt(r.toString().slice(0, 10));
	}
	date.value = dayjs(r * 1000).format("YYYY-MM-DD HH:mm:ss");
};

var onDateChange = () => {
	var r = date.value;
	timestamp.value = dayjs(r).unix();
};

onUnmounted(() => {
	clearInterval(t);
});

//
</script>

<template>
	<div class="time">
		<div>{{ dayjs(now).format("YYYY-MM-DD HH:mm:ss") }}</div>
		<div>
			<v-text-field variant="underlined" label="Timestamp" v-model="timestamp" @keyup="onTimestampChange"></v-text-field>
		</div>
		<div>
			<v-text-field variant="underlined" label="Date" v-model="date" @keyup="onDateChange"></v-text-field>
		</div>
	</div>
</template>

<style scoped lang="scss">
.time {
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 20%;
	}
}
</style>
