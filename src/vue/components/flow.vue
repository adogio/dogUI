<template>
	<div class="main">
		<padding-bar></padding-bar>
		<div v-if="imgSetting" class="title">
			<img v-if="imgSetting.mode=='image'" :src="imgSetting.topper">
			<span v-if="imgSetting.mode=='text'" v-html="imgSetting.topper"></span>
		</div>
		<div class="content" @click="goOut">
			<div>
				<qrcode :content="content" v-if="mode=='qrcode'" :imgSetting="imgSetting"></qrcode>
			</div>
			<div class="bottom">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import qrcode from './qrcode.vue';
	import paddingbar from './paddingbar.vue';

	export default {
		data: function () {
			return {}
		},
		computed: {

		},
		watch: {},
		mounted: function () {},
		props: ['mode', 'content', 'imgSetting'],
		components: {
			"qrcode": qrcode,
			"padding-bar": paddingbar
		},
		methods: {
			goOut: function () {
				window.dog.unflow();
			}
		}
	}
</script>

<style scoped>
	img {
		width: 80px;
		-webkit-filter: drop-shadow(1px 1px 5px black);
		filter: drop-shadow(1px 1px 5px black)
	}

	div.title {
		position: fixed;
		top: 16px;
		left: 10px;
	}

	div.main {
		position: fixed;
		top: 0px;
		width: 100%;
		text-align: center;
		font-size: 30px;
		font-family: 'ubuntu';
		word-break: break-word;
	}

	div.bottom {
		padding-top: 20px;
		word-break: break-word;
	}

	div.content {
		text-align: center;
		font-size: 30px;
		font-family: 'ubuntu';
		word-break: break-word;
	}
</style>