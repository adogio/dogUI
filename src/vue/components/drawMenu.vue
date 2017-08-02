<template>
    <div class="dm" :style="positions">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        computed: {
            positions: function () {
                let realPosition = Math.min(this.status.position - 265, 0);
                let styler = "left: " + realPosition + "px;";
                if (!this.status.triggered) {
                    styler += "transition: all .8s;";
                }
                return styler;
            }
        },
        name: "dog-draw",
        mounted: function () {},
        props: ['status'],
        components: {},
        methods: {}
    }
</script>

<style scoped>
    div.dm {
        -webkit-backdrop-filter: blur(5px);
        /* backdrop-filter: blur(5px); */
        overflow: auto;
        position: fixed;
        top: 0px;
        z-index: 6;
        background-color: rgba(75.3%, 84.2%, 100%, 0.8);
        height: 100%;
        width: 265px;
        -webkit-animation: leftChange 25s linear infinite alternate-reverse;
        animation: leftChange 25s linear infinite alternate-reverse;
    }

    @keyframes leftChange {
        0% {
            border-left: 9px solid #DEFFFC;
        }
        20% {
            border-left: 9px solid #EB5160;
        }
        40% {
            border-left: 9px solid #ED9B40;
        }
        60% {
            border-left: 9px solid #CBE896;
        }
        80% {
            border-left: 9px solid #8BAAAD;
        }
        100% {
            border-left: 9px solid #1FD4F9;
        }
    }

    @-webkit-keyframes leftChange {
        0% {
            border-left: 9px solid #DEFFFC;
        }
        20% {
            border-left: 9px solid #EB5160;
        }
        40% {
            border-left: 9px solid #ED9B40;
        }
        60% {
            border-left: 9px solid #CBE896;
        }
        80% {
            border-left: 9px solid #8BAAAD;
        }
        100% {
            border-left: 9px solid #1FD4F9;
        }
    }
</style>