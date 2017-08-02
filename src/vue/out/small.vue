<template>
    <div class="seprate" v-once>
        <div class="slotContent">
            <anicon :icon="ifIcon" class="icons"></anicon>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import anicon from '../components/icon.vue';
    import config from '../config/config';

    export default {
        name: "dog-static",
        components: {
            "anicon": anicon
        },
        props: ['icon'],
        computed: {
            ifIcon: function () {
                if (this.icon) {
                    return this.icon;
                } else {
                    return 'info-circle';
                }
            }
        }
    }
</script>

<style scoped>
    .icons {
        color: #cc2626;
    }

    .slotContent {
        background-color: rgba(69.2%, 73.2%, 100%, 0.3);
        border-left: 9px solid #5ee2ff;
        padding-left: 3px;
        word-wrap: break-word;
    }

    .seprate {
        font-size: 14px;
        padding-top: 3px;
        font-family: 'Ubuntu';
    }
</style>