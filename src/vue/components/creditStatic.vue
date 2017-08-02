<template>
    <div class="seprate" v-once>
        <div class="slotContent">
            {{text}}&nbsp;<span class="smallSpan">with</span>
            <anicon icon="heart" :style="bgColor" class="animated pulse infinite framee"></anicon>
            <span class="smallSpan">By</span>&nbsp;{{credit}}
        </div>
    </div>
</template>

<script>
    import anicon from './icon.vue';
    import config from '../config/config';

    export default {
        components: {
            "anicon": anicon
        },
        created: function () {
            if (this.$slots.default) {
                this.text = this.$slots.default[0].text;
            }
        },
        data: function () {
            return {
                credit: this.$dog.credit,
                text: "Code"
            }
        },
        computed: {
            bgColor: function () {
                const colorList = config.colorList;
                let color = "#" + colorList[Math.floor(Math.random() * 100) % colorList.length];
                return "color: " + color + ";";
            }
        }
    }
</script>

<style scoped>
    .seprate {
        font-size: 12px;
        text-align: center;
        color: #5e5e5e;
        font-family: 'Ubuntu';
    }

    .smallSpan {
        vertical-align: middle;
        font-size: 10px;
    }

    .framee {
        font-size: 11px;
        -webkit-animation-duration: 2.5s;
        animation-duration: 2.5s;
    }
</style>