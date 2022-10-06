<script setup>
import { ref } from "vue";
import TitleBar from "@/components/TitleBar.vue";
import { useRoute, useRouter } from "vue-router";
import { children } from "../router/children";

var router = useRouter();
var route = useRoute();

var drawer = ref(true);
var items = ref([]);
for (let i = 0; i < children.length; i++) {
	items.value.push({ title: children[i].name, icon: children[i].icon, path: children[i].path });
}

var rail = ref(true);
var select = ref(0);

var onSelect = (i, item) => {
	select.value = i;
	router.push(item.path);
};

//
</script>

<template>
	<title-bar :title="route.name"></title-bar>
	<div class="index">
		<v-layout>
			<v-navigation-drawer v-model="drawer" :rail="rail" permanent>
				<v-list-item prepend-icon="mdi-menu" nav @click="rail = false">
					<template v-slot:append>
						<v-btn density="compact" variant="text" icon="mdi-chevron-left" @click.stop="rail = true"></v-btn>
					</template>
				</v-list-item>

				<v-divider></v-divider>

				<v-list density="compact" nav>
					<v-list-item
						v-for="(item, i) in items"
						density="compact"
						:key="i"
						:active="i == select"
						:prepend-icon="item.icon"
						:title="item.title"
						:value="item.title"
						@click="onSelect(i, item)"
					></v-list-item>
				</v-list>
			</v-navigation-drawer>
			<v-main>
				<router-view></router-view>
			</v-main>
		</v-layout>
	</div>
</template>

<style scoped lang="scss">
.index {
	width: 100%;
	height: calc(100% - 24px);

	::v-deep .v-layout {
		height: 100%;
		width: 100%;

		.v-navigation-drawer {
			height: calc(100% - 24px) !important;
			width: 100%;
			bottom: 0 !important;
			top: 24px !important;
			background-color: #f3f3f3;
		}
	}
}
</style>
