<template>
    <div>
        <div v-show="bindClass.length>7" class="stander">
        </div>
        <div class="bar" v-bind:class="bindClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                bindClass: "",
                added: false
            }
        },
        mounted: function () {
            window.addEventListener('scroll', this.handleScroll);
        },
        props: ['merge'],
        methods: {
            addFix: function () {
                this.bindClass = "fixed bgcolor";
            },
            removeFix: function () {
                this.bindClass = "";
            },
            outFix: function () {
                this.bindClass = "outed";
            },
            handleScroll: function () {
                let mergetop = 122;
                if (this.merge) {
                    mergetop += this.merge;
                }
                if (window.scrollY >= mergetop && !this.added) {
                    this.added = true;
                    this.addFix();
                } else if (window.scrollY < mergetop && this.added) {
                    this.added = false;
                    this.outFix();
                }
            }
        },
        computed: {}
    }
</script>

<style scoped>
    @keyframes fade-in {
        0% {
            background-color: transparent;
        }
        20% {
            background-color: transparent;
        }
        100% {
            background-color: rgba(100%, 88.3%, 64%, 0.8);
        }
    }

    @-webkit-keyframes fade-in {
        0% {
            background-color: transparent;
        }
        20% {
            background-color: transparent;
        }
        100% {
            background-color: rgba(100%, 88.3%, 64%, 0.8);
        }
    }

    @keyframes fade-out {
        0% {
            background-color: rgba(100%, 88.3%, 64%, 0.8);
        }
        20% {
            background-color: rgba(100%, 88.3%, 64%, 0.8);
        }
        100% {
            background-coloar: transparent;
        }
    }

    @-webkit-keyframes fade-out {
        0% {
            background-color: rgba(100%, 88.3%, 64%, 0.8);
        }
        20% {
            background-color: rgba(100%, 88.3%, 64%, 0.8);
        }
        100% {
            background-coloar: transparent;
        }
    }

    div {
        padding-top: 2px;
    }

    div.outed {
        background-color: transparent;
        animation: fade-out 1s;
        -webkit-animation: fade-out 1s;
    }

    div.stander {
        height: 50px;
    }

    div.bar {
        border-left: 9px solid #ff6464;
        height: 50px;
    }

    div.bgcolor {
        background-color: rgba(100%, 88.3%, 64%, 0.8);
        animation: fade-in 0.8s;
        -webkit-animation: fade-in 0.8s;
    }

    div.fixed {
        position: fixed;
        width: 100vw;
        top: 2px;
        z-index: 5;
    }
</style>