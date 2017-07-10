<template>
    <div>
        <div class="row">
            <div class="col-xs-1 left">
                <anicon v-bind:icon="icon"></anicon>
            </div>
            <div class="col-xs-11 right">
                <strong><span v-text="info"></span></strong>
            </div>
        </div>
    </div>
</template>

<script>
    import anicon from './icon.vue';
    export default {
        components: {
            "anicon": anicon
        },
        props: ['icon', 'info']
    }
</script>

<style scoped>
    .left {
        text-align: right;
        font-size: 23px;
    }

    .right {
        text-align: left;
        font-size: 23px;
    }
</style>