<template>
    <div>
        <div class="right" :style="outColor">
            <div :style="bgColor" @click="emitClick">
                <anicon class="icon" v-bind:icon="icon"></anicon>
                <span class="spans" v-text="info"></span>
                <anicon v-if="right" class="fa fa-caret-down righticon" :class="arrowClass"></anicon>
            </div>
        </div>
    </div>
</template>

<script>
    import anicon from '../components/icon.vue';
    import config from '../config/config';

    export default {
        components: {
            "anicon": anicon
        },
        props: ['icon', 'info', 'outColor', 'right'],
        data: function () {
            return {
                arrowStatus: false
            }
        },
        watch: {
            right: function () {
                if (this.right == "down") {
                    this.arrowStatus = false;
                } else {
                    this.arrowStatus = true;
                }
            }
        },
        methods: {
            emitClick: function () {
                this.$emit('click');
            }
        },
        name: "dog-tab",
        computed: {
            arrowClass: function () {
                if (this.arrowStatus) {
                    return "down";
                } else {
                    return "upper";
                }
            },
            ouside: function () {
                if (this.outColor) {
                    return this.outColor;
                } else {
                    return "";
                }
            },
            bgColor: function () {
                const colorList = config.colorList;
                let color = "#" + colorList[Math.floor(Math.random() * 100) % colorList.length];
                return "border-left: " + 6 + "px solid " + color + ";";
            }
        }
    }
</script>

<style scoped>
    .righticon {
        float: right;
        margin-right: 10px;
        transition: all 0.5s;
    }

    .righticon.upper {
        transform: rotate(0deg);
    }

    .righticon.down {
        transform: rotate(180deg);
    }

    .icon {
        font-size: 21px;
        padding-left: 7px;
    }

    .spans {
        padding-left: 5px;
    }

    .right {
        font-size: 23px;
        font-family: 'ubuntu';
        background-color: rgba(100%, 90%, 50%, 0.3);
    }
</style>