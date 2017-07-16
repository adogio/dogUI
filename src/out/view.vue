<template>
    <div>
        <div class="row" v-for="row in rows" v-if="small">
            <div class="col-xs-4" v-for="i in row">
                <dog-view :src="i"></dog-view>
            </div>
        </div>
        <div v-else>
            <dog-view :src="biggerone"></dog-view>
        </div>
    </div>
</template>

<script>
    import view from '../components/view.vue';
    export default {
        data: function () {
            return {
                small: true,
                left: 0,
                top: 0
            }
        },
        computed: {
            biggerone: function () {

            },
            rows: function () {
                let srcs = this.srcs;
                let re = [];
                let temp = [];
                while (srcs.length != 0) {
                    temp.push(srcs.shift());
                    if (temp.length == 3 || srcs.length == 0) {
                        re.push(temp);
                        temp = [];
                    }
                }
                return re;
            }
        },
        mounted: function () {},
        props: ['srcs'],
        components: {
            "dog-view": view
        },
        methods: {
            biggerClick: function () {

            }
        }
    }
</script>

<style scoped>
    div.col-xs-4,
    div.row {
        margin: 0px;
        padding: 0px;
    }
</style>