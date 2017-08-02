<template>
    <div>
        <div class="padding-line">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
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
    div {
        padding: 0px;
        margin: 0px;
    }

    div.padding-line {
        height: 7px;
        background-color: black;
        -webkit-animation: colorchange 25s linear infinite alternate;
        animation: colorchange 25s linear infinite alternate;
    }

    @keyframes colorchange {
        0% {
            background-color: #DEFFFC;
        }
        20% {
            background-color: #EB5160;
        }
        40% {
            background-color: #ED9B40;
        }
        60% {
            background-color: #CBE896;
        }
        80% {
            background-color: #8BAAAD;
        }
        100% {
            background-color: #1FD4F9;
        }
    }

    @-webkit-keyframes colorchange {
        0% {
            background-color: #DEFFFC;
        }
        20% {
            background-color: #EB5160;
        }
        40% {
            background-color: #ED9B40;
        }
        60% {
            background-color: #CBE896;
        }
        80% {
            background-color: #8BAAAD;
        }
        100% {
            background-color: #1FD4F9;
        }
    }
</style>