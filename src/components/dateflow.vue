<template>
    <div>
        <div class="center">
            <div class="row">
                <div class="col-xs-6">
                    Year
                </div>
                <div class="col-xs-6">
                    Month
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <anicon icon="arrow-circle-left"></anicon>
                    <anicon icon="arrow-circle-right"></anicon>
                </div>
                <div class="col-xs-6">
                    <anicon icon="arrow-circle-left"></anicon>
                    <anicon icon="arrow-circle-right"></anicon>
                </div>
            </div>
            <hr>
            <div>Day</div>
            <dog-button icon="check" color="green" @click="trys">test</dog-button>
        </div>
    </div>
</template>

<script>
    import icons from './icon.vue';
    import dogbutton from '../out/button.vue';
    export default {
        data: function () {
            return {}
        },
        computed: {

        },
        watch: {
            content: function () {}
        },
        mounted: function () {},
        props: ['content'],
        components: {
            "anicon": icons,
            "dog-button": dogbutton
        },
        methods: {
            trys: function () {
                this.content('999');
            }
        }
    }
</script>

<style scoped>
    .center {
        margin: auto;
        margin-top: 138px;
        font-size: 20px;
    }
</style>