<script setup>
import { ref } from "vue";

var require = window.require;

const { ipcRenderer } = require("electron");
const fs = require("fs");
const crypto = require("crypto");

var tab = ref();

var md5 = ref("");
var md5Encode = ref("");
var onMD5 = () => {
	md5Encode.value = crypto.createHash("md5").update(md5.value).digest("hex");
};

var base64 = ref("");
var base64Encode = ref("");
var onBase64 = () => {
	base64Encode.value = Buffer.from(base64.value).toString("base64");
};
var onBase64Encode = () => {
	base64.value = Buffer.from(base64Encode.value, "base64").toString("ascii");
};

var sha1 = ref("");
var sha1Encode = ref("");
var onSHA1 = () => {
	sha1Encode.value = crypto.createHash("sha1").update(sha1.value).digest("hex");
};

var sha256 = ref("");
var sha256Encode = ref("");
var onSHA256 = () => {
	sha256Encode.value = crypto.createHash("sha256").update(sha256.value).digest("hex");
};
//
</script>

<template>
	<div class="crypto">
		<v-tabs density="compact" v-model="tab" background-color="primary">
			<v-tab value="Base64">Base64</v-tab>
			<v-tab value="MD5">MD5</v-tab>
			<v-tab value="SHA1">SHA1</v-tab>
			<v-tab value="SHA256">SHA256</v-tab>
		</v-tabs>

		<v-card-text>
			<v-window v-model="tab">
				<v-window-item value="Base64">
					<div class="container">
						<div>
							<v-text-field
								variant="underlined"
								label="Base64 Decode"
								v-model="base64"
								@keyup="onBase64"
								spellcheck="false"
							></v-text-field>
						</div>
						<div>
							<v-textarea
								variant="underlined"
								label="Base64 Encode"
								v-model="base64Encode"
								@keyup="onBase64Encode"
								readonly
								auto-grow
								outlined
								rows="1"
								max-rows="15"
								spellcheck="false"
							></v-textarea>
						</div>
					</div>
				</v-window-item>

				<v-window-item value="MD5">
					<div class="container">
						<div>
							<v-text-field variant="underlined" label="MD5" v-model="md5" @keyup="onMD5" spellcheck="false"></v-text-field>
						</div>
						<div>
							<v-text-field variant="underlined" label="MD5 Encode" v-model="md5Encode" readonly spellcheck="false"></v-text-field>
						</div>
					</div>
				</v-window-item>

				<v-window-item value="SHA1">
					<div class="container">
						<div>
							<v-text-field variant="underlined" label="SHA1" v-model="sha1" @keyup="onSHA1" spellcheck="false"></v-text-field>
						</div>
						<div>
							<v-text-field variant="underlined" label="SHA1 Encode" v-model="sha1Encode" readonly spellcheck="false"></v-text-field>
						</div>
					</div>
				</v-window-item>

				<v-window-item value="SHA256">
					<div class="container">
						<div>
							<v-text-field variant="underlined" label="SHA256" v-model="sha256" @keyup="onSHA256" spellcheck="false"></v-text-field>
						</div>
						<div>
							<v-textarea
								variant="underlined"
								label="SHA256 Encode"
								v-model="sha256Encode"
								readonly
								auto-grow
								outlined
								rows="1"
								row-height="15"
								spellcheck="false"
							></v-textarea>
						</div>
					</div>
				</v-window-item>
			</v-window>
		</v-card-text>
	</div>
</template>

<style scoped lang="scss">
.crypto {
	width: 100%;
	height: 100%;

	.v-card-text {
		width: 100%;
		height: calc(100% - 36px);

		.v-window {
			width: 100%;
			height: 100%;

			.v-window-item {
				width: 100%;
				height: 100%;
			}
		}
	}

	.container {
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
			width: 70%;
			min-height: 20%;
			// max-height: 50%;
		}
	}
}
</style>
