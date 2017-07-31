<template>
    <div class="seprate" v-once>
        <div class="slotContent">
            <anicon :icon="ifIcon" class="icons"></anicon><slot></slot>
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
        mounted: function(){
            console.log(this);
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
        background-color: rgba(69.1%, 100%, 80.3%, 0.3);
        border-left: 9px solid #5ee2ff;
        padding-left: 3px;
        word-wrap: break-word;
    }

    .seprate {
        font-size: 23px;
        padding-top: 3px;
        font-family: 'Ubuntu';
    }
</style>