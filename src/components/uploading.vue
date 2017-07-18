<template>
    <div>
        <div class="loader">
            <div class="text"><i class="fa fa-cloud-upload"></i></div>
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
        <div class='center' v-if='info' v-html='info'></div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                info: this.$parent.upload.info,
                icon: this.$parent.upload.icon
            }
        },
        computed: {

        },
        mounted: function () {},
        props: [],
        components: {},
        methods: {}
    }
</script>

<style scoped>
    .text {
        padding-top: 33%;
    }

    .loader {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        perspective: 800px;
        text-align: center;
        font-size: 60px;
        margin: auto;
        margin-top: 130px;
        margin-bottom: 75px;
    }

    .center {
        font-family: 'ubuntu';
        text-align: center;
        width: 100%;
        font-size: 45px;
    }

    .inner {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .inner.one {
        left: 0%;
        top: 0%;
        animation: rotate-one 1.8s linear infinite;
        border-bottom: 5px solid firebrick;
    }

    .inner.two {
        right: 0%;
        top: 0%;
        animation: rotate-two 1.8s linear infinite;
        border-right: 5px solid orange;
    }

    .inner.three {
        right: 0%;
        bottom: 0%;
        animation: rotate-three 1.8s linear infinite;
        border-top: 5px solid blueviolet;
    }

    @keyframes rotate-one {
        0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }

    @keyframes rotate-two {
        0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }

    @keyframes rotate-three {
        0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }
</style>