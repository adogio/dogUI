<template>
    <div>
        <div class="row" v-for="(row, indexl) in rows" v-if="small&&rows">
            <div class="col-xs-4" v-for="(i, indexr) in row">
                <div class="box" @click="biggerClick(indexl, indexr)">
                    <img :src="i">
                </div>
            </div>
        </div>
        <div v-if="!small">
            <div class="box" @click="smallClick">
                <img :src="biggerone">
            </div>
            <dog-button icon="download" color="purple" @click="download">
                <slot></slot>
            </dog-button>
        </div>
    </div>
</template>

<script>
    import button from './button.vue';
    export default {
        data: function () {
            return {
                rows: null,
                small: true,
                left: 0,
                top: 0
            }
        },
        computed: {
            biggerone: function () {
                return this.rows[this.left][this.top];
            }
        },
        mounted: function () {
            this.rows = this.getrows();
        },
        props: ['srcs'],
        components: {
            "dog-button": button
        },
        methods: {
            download: function () {
                console.log("???");
            },
            biggerClick: function (indexl, indexr) {
                this.left = indexl;
                this.top = indexr;
                this.small = false;
            },
            smallClick: function () {
                this.small = true;
            },
            getrows: function () {
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
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .box img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }

    div.col-xs-4,
    div.row {
        margin: 0px;
        padding: 0px;
    }
</style>