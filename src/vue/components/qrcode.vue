<template>
    <div>
        <div class="content">
            <table class="center" border="0">
                <tr>
                    <td class="white out"></td>
                    <td v-for="j in src[0]" class="white">
                    </td>
                    <td class="white out"></td>
                </tr>
                <tr v-for="i in src">
                    <td class="white out"></td>
                    <td v-for="j in i" :class="toClass(j)">
                    </td>
                    <td class="white out"></td>
                </tr>
                <tr>
                    <td class="white out"></td>
                    <td v-for="j in src[0]" class="white">
                    </td>
                    <td class="white out"></td>
                </tr>
            </table>
        </div>
        <div class="above"><img v-if="imgCenter" :src="imgCenter"></div>
    </div>
</template>

<script>
    import {
        qrtable
    } from 'doglib';
    export default {
        data: function () {
            return {
                src: ""
            }
        },
        computed: {

        },
        watch: {
            content: function () {
                this.src = qrtable(this.content, 6);
            }
        },
        mounted: function () {
            this.src = qrtable(this.content, 6);
        },
        props: ['content', 'imgCenter'],
        components: {},
        methods: {
            toClass: function (ingo) {
                return (ingo == 1) ? 'black' : 'white';
            }
        }
    }
</script>

<style scoped>
    .content {
        text-align: center;
    }


    td {
        height: 8px;
        width: 8px;
        border: 0px;
    }

    img {
        width: 48px;
        height: 48px;
        background-color: rgba(216, 117, 0, 0.95);
        border-radius: 22%;
        padding: 5px;
        pointer-events: none;
    }

    .above {
        position: fixed;
        top: 266px;
        text-align: center;
        width: 100%;
    }

    td.black {
        background-color: #181818;
    }

    td.white {
        background-color: #f5f5f5;
    }

    .center {
        margin: auto;
        margin-top: 138px;
        border: 7px solid #b30000;
    }
</style>